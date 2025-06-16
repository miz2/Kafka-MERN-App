import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TRIGGERS = ["SCHEDULE", "WEBHOOK", "DB_EVENT"];
const ACTIONS = ["SEND_EMAIL", "CALL_API"];

const CreateRuleForm = () => {
  const [form, setForm] = useState({
    name: "",
    trigger: "",
    action: "",
    schedule: "",
    payload: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const payloadObj = form.payload ? JSON.parse(form.payload) : {};

      const res = await axios.post("http://localhost:5000/api/rules", {
        ...form,
        payload: payloadObj,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Rule created successfully!");
      setForm({ name: "", trigger: "", action: "", schedule: "", payload: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to create rule.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Create a New Rule</h2>
        <p className="text-gray-500 text-sm">Define your automation below</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Rule Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter rule name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Trigger</label>
            <select
              name="trigger"
              required
              value={form.trigger}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Trigger</option>
              {TRIGGERS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Action</label>
            <select
              name="action"
              required
              value={form.action}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Action</option>
              {ACTIONS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
        </div>

        {form.trigger === "SCHEDULE" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Schedule (CRON format or time)</label>
            <input
              type="text"
              name="schedule"
              value={form.schedule}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g. 0 12 * * *"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Payload (JSON format)</label>
          <textarea
            name="payload"
            rows={5}
            value={form.payload}
            onChange={handleChange}
            className="mt-1 block w-full font-mono rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder='{"key": "value"}'
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-200"
          >
            Create Rule
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRuleForm;
