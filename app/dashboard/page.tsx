"use client";

import React, { useState } from "react";
import Sidebar from "@/components/app/Sidebar";
import Header from "@/components/app/Header";
import MembersPage from "@/components/app/MembersPage";
import GroupsPage from "@/components/app/GroupsPage";
import ChurchDashboard from "@/components/app/ChurchDashboard";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "members":
        return <MembersPage />;
      case "groups":
        return <GroupsPage />;
      // Add more cases for other tabs
      default:
        return <ChurchDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex-1 flex flex-col">
        <Header setActiveTab={setActiveTab} />
        <main className="flex-1 p-6 bg-gray-50">{renderContent()}</main>
      </div>
    </div>
  );
}
