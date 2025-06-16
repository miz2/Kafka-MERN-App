import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const RuleCard = ({ rule, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dbe0e6] flex flex-col gap-2">
      <p className="text-sm text-[#60758a] font-medium">Rule Name</p>
      <h3 className="text-base font-semibold text-[#111418]">{rule.name}</h3>
      <p className="text-sm text-[#60758a]">
        Trigger: {rule.trigger}, Action: {rule.action}
      </p>
      <div className="flex gap-3 mt-2">
        <button
          onClick={() => onEdit(rule._id)}
          className="flex items-center text-blue-600 hover:underline text-sm"
        >
          <Pencil size={16} className="mr-1" />
          Edit
        </button>
        <button
          onClick={() => onDelete(rule._id)}
          className="flex items-center text-red-600 hover:underline text-sm"
        >
          <Trash2 size={16} className="mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default RuleCard;
