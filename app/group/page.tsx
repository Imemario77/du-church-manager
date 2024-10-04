"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Users, Search } from "lucide-react";

// Mock data for members and groups
const mockMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    groups: ["Youth", "Choir"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "(555) 987-6543",
    groups: ["Women's Ministry"],
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "(555) 246-8135",
    groups: ["Men's Fellowship"],
  },
];

const mockGroups = [
  "Youth",
  "Women's Ministry",
  "Men's Fellowship",
  "Choir",
  "Bible Study",
];

export default function MembersAndGroupsPage() {
  const [members, setMembers] = useState(mockMembers);
  const [groups, setGroups] = useState(mockGroups);
  const [searchTerm, setSearchTerm] = useState("");
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const { toast } = useToast();

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateGroup = () => {
    if (newGroupName && selectedMembers.length > 0) {
      setGroups([...groups, newGroupName]);
      const updatedMembers = members.map((member) => {
        if (selectedMembers.includes(member.id)) {
          return { ...member, groups: [...member.groups, newGroupName] };
        }
        return member;
      });
      setMembers(updatedMembers);
      setNewGroupName("");
      setSelectedMembers([]);
      toast({
        title: "Success",
        description: `Group "${newGroupName}" has been created with ${selectedMembers.length} members.`,
      });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Members and Groups</h1>

      {/* Members Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Church Members</CardTitle>
          <CardDescription>View and manage all church members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search members"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add New Member
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Groups</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell>{member.groups.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Groups Section */}
      <Card>
        <CardHeader>
          <CardTitle>Church Groups</CardTitle>
          <CardDescription>
            Manage existing groups and create new ones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">Existing Groups</h3>
              <ul className="list-disc list-inside">
                {groups.map((group, index) => (
                  <li key={index}>{group}</li>
                ))}
              </ul>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Create New Group
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Group</DialogTitle>
                  <DialogDescription>
                    Enter a name for the new group and select members to add.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="group-name" className="text-right">
                      Group Name
                    </Label>
                    <Input
                      id="group-name"
                      value={newGroupName}
                      onChange={(e) => setNewGroupName(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Select Members</Label>
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`member-${member.id}`}
                          checked={selectedMembers.includes(member.id)}
                          onCheckedChange={(checked) => {
                            setSelectedMembers(
                              checked
                                ? [...selectedMembers, member.id]
                                : selectedMembers.filter(
                                    (id) => id !== member.id
                                  )
                            );
                          }}
                        />
                        <Label htmlFor={`member-${member.id}`}>
                          {member.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleCreateGroup}>Create Group</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
