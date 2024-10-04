"use client";

import React from "react";
import { Layers, Users, UserPlus, Calendar } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="px-4">
      <h2 className="text-[15px] py-5 font-bold leading-7 text-gray-900 sm:truncate">
        DU CHURCH MANAGER
      </h2>
      <nav className="mt-4">
        {[
          { name: "Dashboard", icon: Layers, id: "dashboard" },
          { name: "Members", icon: Users, id: "members" },
          { name: "Groups", icon: UserPlus, id: "groups" },
          { name: "Events", icon: Calendar, id: "events" },
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
    </div>
  );
}
