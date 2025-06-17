import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SidebarMenu from "./SideMenu";
import TopBar from "../components/Topbar";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import SectionHeader from "../components/SectionHeader";
import LogCard from "../components/LogCard";
import RuleCard from "../components/Rulecard";
import RuleTable from "../components/RuleTable";
import { Zap, Eye } from "lucide-react";

export const Dashboard = () => {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("card");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/rules", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRules(res.data);
      } catch (error) {
        console.error("Error fetching rules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRules();
  }, []);

  const handleDelete = async (ruleId) => {
    if (!window.confirm("Are you sure you want to delete this rule?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/rules/${ruleId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRules((prev) => prev.filter((rule) => rule._id !== ruleId));
    } catch (err) {
      console.error("Failed to delete rule:", err);
      alert("Failed to delete rule. Check console for error.");
    }
  };

  const handleEdit = (ruleId) => {
    console.log("Edit clicked for:", ruleId);
  };

  const filteredRules = rules.filter((rule) => {
    const term = searchTerm.toLowerCase();
    return (
      rule.name?.toLowerCase().includes(term) ||
      rule.trigger?.toLowerCase().includes(term) ||
      rule.action?.toLowerCase().includes(term)
    );
  });

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex">
        {/* <SidebarMenu /> */}
        <main className="flex-1 bg-[#f9fafb] min-h-screen overflow-y-auto">
          <TopBar />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Tabs active={view} setActive={setView} />

          <SectionHeader title="Rules" />
          <div className="px-4">
            {loading ? (
              <p className="text-gray-500 text-sm">Loading rules...</p>
            ) : filteredRules.length === 0 ? (
              <p className="text-gray-500 text-sm">No rules found.</p>
            ) : view === "card" ? (
              <div className="flex flex-col gap-4">
                {filteredRules.map((rule) => (
                  <RuleCard
                    key={rule._id}
                    rule={rule}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            ) : (
              <RuleTable rules={filteredRules} onEdit={handleEdit} onDelete={handleDelete} />
            )}
          </div>

          <SectionHeader title="Recent Logs" />
          <div className="flex flex-col gap-4 px-4 pb-8">
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
