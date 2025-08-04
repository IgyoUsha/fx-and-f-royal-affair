
import { useState, useEffect } from "react";
import { LogOut, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminStats from "./AdminStats";
import RSVPTable from "./RSVPTable";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface RSVPData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  attendance: 'yes' | 'no';
  guest_count: number;
  special_dietary_needs: boolean;
  dietary_restrictions?: string;
  message?: string;
  submitted_at: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [rsvpData, setRsvpData] = useState<RSVPData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchRSVPData = async () => {
    try {
      const { data, error } = await supabase
        .from('rsvp')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) {
        throw error;
      }

      setRsvpData(data as RSVPData[] || []);
    } catch (error) {
      console.error('Error fetching RSVP data:', error);
      toast({
        title: "Error",
        description: "Failed to load RSVP data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRSVPData();

    // Set up real-time subscription
    const channel = supabase
      .channel('rsvp-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'rsvp'
        },
        () => {
          fetchRSVPData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Attendance", "Guest Count", "Dietary Needs", "Restrictions", "Message", "Submitted At"];
    const csvContent = [
      headers.join(","),
      ...rsvpData.map(rsvp => [
        rsvp.name,
        rsvp.email,
        rsvp.phone || '',
        rsvp.attendance,
        rsvp.guest_count,
        rsvp.special_dietary_needs ? 'Yes' : 'No',
        rsvp.dietary_restrictions || '',
        `"${rsvp.message || ''}"`,
        new Date(rsvp.submitted_at).toLocaleDateString()
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-rsvp-data.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border mb-8 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Wedding Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your wedding RSVPs and guest information</p>
            </div>
            <div className="flex space-x-4">
              <Button
                onClick={exportToCSV}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </Button>
              <Button
                onClick={onLogout}
                variant="outline"
                className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading RSVP data...</p>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <AdminStats rsvpData={rsvpData} />

            {/* RSVP Table */}
            <RSVPTable rsvpData={rsvpData} />
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
