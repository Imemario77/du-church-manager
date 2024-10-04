"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Users } from "lucide-react";

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

export default function GroupsPage() {
  const [members, setMembers] = useState(mockMembers);
  const [groups, setGroups] = useState(mockGroups);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const { toast } = useToast();

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
                <Users className="mr-2 h-4 w-4" /> Create New Group
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Group</DialogTitle>
                <DialogDescription>
                  Enter the group name and select members to add to this group.
                </DialogDescription>
              </DialogHeader>
              <div>
                <Label htmlFor="group-name">Group Name</Label>
                <Input
                  id="group-name"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  className="mt-1 mb-4"
                />
                <h4 className="font-semibold">Select Members</h4>
                <ul className="list-none">
                  {members.map((member) => (
                    <li key={member.id} className="flex items-center">
                      <Checkbox
                        checked={selectedMembers.includes(member.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedMembers([...selectedMembers, member.id]);
                          } else {
                            setSelectedMembers(
                              selectedMembers.filter((id) => id !== member.id)
                            );
                          }
                        }}
                      />
                      <span className="ml-2">{member.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <DialogFooter>
                <Button onClick={handleCreateGroup}>Create Group</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
