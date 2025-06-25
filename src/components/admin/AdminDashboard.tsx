
import { useState } from "react";
import { Users, Calendar, Mail, Phone, LogOut, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

  const attendingGuests = rsvpData.filter(rsvp => rsvp.attendance === "yes");
  const notAttendingGuests = rsvpData.filter(rsvp => rsvp.attendance === "no");
  const totalGuests = attendingGuests.reduce((sum, rsvp) => sum + parseInt(rsvp.guestCount), 0);

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

        {/* RSVP Table */}
        <Card>
          <CardHeader>
            <CardTitle>RSVP Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Dietary Needs</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rsvpData.map((rsvp) => (
                    <TableRow key={rsvp.id}>
                      <TableCell className="font-medium">{rsvp.name}</TableCell>
                      <TableCell>{rsvp.email}</TableCell>
                      <TableCell>{rsvp.phone}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          rsvp.attendance === "yes" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {rsvp.attendance === "yes" ? "Attending" : "Not Attending"}
                        </span>
                      </TableCell>
                      <TableCell>{rsvp.attendance === "yes" ? rsvp.guestCount : "-"}</TableCell>
                      <TableCell>
                        {rsvp.specialDietaryNeeds || rsvp.dietaryRestrictions || "None"}
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{rsvp.message}</TableCell>
                      <TableCell>
                        {new Date(rsvp.submittedAt).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
