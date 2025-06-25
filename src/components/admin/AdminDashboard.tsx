
import { useState } from "react";
import { LogOut, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminStats from "./AdminStats";
import RSVPTable from "./RSVPTable";

interface RSVPData {
  id: string;
  name: string;
  email: string;
  phone: string;
  attendance: string;
  guestCount: string;
  specialDietaryNeeds: string;
  dietaryRestrictions: string;
  message: string;
  submittedAt: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  // Mock RSVP data - in a real app, this would come from a database
  const [rsvpData] = useState<RSVPData[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      attendance: "yes",
      guestCount: "2",
      specialDietaryNeeds: "vegetarian",
      dietaryRestrictions: "None",
      message: "So excited for your special day!",
      submittedAt: "2024-01-15T10:30:00Z"
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1987654321",
      attendance: "yes",
      guestCount: "1",
      specialDietaryNeeds: "",
      dietaryRestrictions: "Gluten-free",
      message: "Can't wait to celebrate with you!",
      submittedAt: "2024-01-16T14:20:00Z"
    }
  ]);

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Attendance", "Guest Count", "Dietary Needs", "Restrictions", "Message", "Submitted At"];
    const csvContent = [
      headers.join(","),
      ...rsvpData.map(rsvp => [
        rsvp.name,
        rsvp.email,
        rsvp.phone,
        rsvp.attendance,
        rsvp.guestCount,
        rsvp.specialDietaryNeeds,
        rsvp.dietaryRestrictions,
        `"${rsvp.message}"`,
        new Date(rsvp.submittedAt).toLocaleDateString()
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

        {/* Stats Cards */}
        <AdminStats rsvpData={rsvpData} />

        {/* RSVP Table */}
        <RSVPTable rsvpData={rsvpData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
