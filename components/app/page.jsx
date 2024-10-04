"use client";

import React, { useState } from "react";
import {
  Bell,
  Calendar,
  Users,
  UserPlus,
  Layers,
  Settings,
  Menu,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ChurchDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const SidebarContent = () => (
    <React.Fragment>
      <div className="px-4"></div>
      <nav className="mt-4">
        {[
          { name: "Dashboard", icon: Layers, id: "dashboard" },
          { name: "Members", icon: Users, id: "members" },
          { name: "Groups", icon: UserPlus, id: "groups" },
          { name: "Events", icon: Calendar, id: "events" },
          //   { name: "Settings", icon: Settings, id: "settings" },
        ].map((item) => (
          <button
            key={item.name}
            className={`flex items-center w-full px-4 py-2 text-left ${
              activeTab === item.id
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </button>
        ))}
      </nav>
    </React.Fragment>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden mr-2"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
              Dashboard
            </h2>
          </div>
          <div className="flex items-center">
            <Button variant="outline" size="icon" className="mr-2">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden ">
        {/* Sidebar for larger screens */}
        <div className="hidden lg:block w-64 bg-white shadow-md overflow-y-auto">
          <SidebarContent />
        </div>

        {/* Main Content */}
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
                  <p className="text-xs text-muted-foreground">
                    2 new this month
                  </p>
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
                <CardDescription>
                  A list of recent church members
                </CardDescription>
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
      </div>
    </div>
  );
}
    