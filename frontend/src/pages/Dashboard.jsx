import React from "react";
import Navbar from "../components/Navbar";
import SidebarMenu from "./SideMenu";

import TopBar from "../components/Topbar";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import SectionHeader from "../components/SectionHeader";
import { RuleCard } from "../components/RuleCard";
import LogCard from "../components/LogCard";

import { Zap, Eye } from "lucide-react"; // Or any icon library

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SidebarMenu />

        <main className="flex-1 bg-[#f9fafb] min-h-screen overflow-y-auto">
          <TopBar />
          <SearchBar />
          <Tabs active="list" />

          {/* Rules Section */}
          <SectionHeader title="Rules" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <RuleCard
              title="Form Upload Trigger"
              description="Triggers when a form is uploaded to OneDrive"
              imageUrl="https://i.imgur.com/3bX9R5p.png"
            />
            <RuleCard
              title="Validation Flow"
              description="Executes AI model validation on uploaded forms"
              imageUrl="https://i.imgur.com/8nbGsqv.png"
            />
            <RuleCard
              title="Manual Review"
              description="Notifies user if AI confidence is below threshold"
              imageUrl="https://i.imgur.com/w86VtvN.png"
            />
          </div>

          {/* Logs Section */}
          <SectionHeader title="Recent Logs" />
          <div className="flex flex-col gap-4 px-4">
            <LogCard
              title="Flow Triggered"
              subtitle="Form Upload Trigger was initiated"
              icon={<Zap size={20} />}
            />
            <LogCard
              title="AI Validation Failed"
              subtitle="Confidence below 0.85 for Consent Form"
              icon={<Eye size={20} />}
            />
          </div>
        </main>
      </div>
    </>
  );
};
