
import { Users, Calendar, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

interface AdminStatsProps {
  rsvpData: RSVPData[];
}

const AdminStats = ({ rsvpData }: AdminStatsProps) => {
  const attendingGuests = rsvpData.filter(rsvp => rsvp.attendance === "yes");
  const notAttendingGuests = rsvpData.filter(rsvp => rsvp.attendance === "no");
  const totalGuests = attendingGuests.reduce((sum, rsvp) => sum + rsvp.guest_count, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total RSVPs</CardTitle>
          <Mail className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{rsvpData.length}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Attending</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{attendingGuests.length}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Not Attending</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">{notAttendingGuests.length}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Guests</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">{totalGuests}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminStats;
