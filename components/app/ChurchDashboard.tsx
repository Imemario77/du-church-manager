"use client";

import React from "react";
import { Bell, Calendar, Users, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ChurchDashboard() {
  return (
    <div className="flex-1 overflow-auto">
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Members Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Members
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+20 this week</p>
            </CardContent>
          </Card>

          {/* Active Groups Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Groups
              </CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">2 new this month</p>
            </CardContent>
          </Card>

          {/* Upcoming Birthdays Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Upcoming Birthdays
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                In the next 7 days
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Member List */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Members</CardTitle>
            <CardDescription>A list of recent church members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Alice Johnson",
                  email: "alice@example.com",
                  birthday: "Mar 15",
                },
                {
                  name: "Bob Smith",
                  email: "bob@example.com",
                  birthday: "Apr 22",
                },
                {
                  name: "Carol Williams",
                  email: "carol@example.com",
                  birthday: "May 7",
                },
              ].map((member) => (
                <div
                  key={member.email}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt={member.name}
                      />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {member.birthday}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button className="flex-1 sm:flex-none">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Member
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Event
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Bell className="mr-2 h-4 w-4" />
                Send Notification
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default ChurchDashboard;
