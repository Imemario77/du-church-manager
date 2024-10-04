"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Search, UserPlus } from "lucide-react";

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

export default function MembersPage() {
  const [members, setMembers] = useState(mockMembers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
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
  );
}
