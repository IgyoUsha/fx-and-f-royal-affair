
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

interface RSVPTableProps {
  rsvpData: RSVPData[];
}

const RSVPTable = ({ rsvpData }: RSVPTableProps) => {
  return (
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
  );
};

export default RSVPTable;
