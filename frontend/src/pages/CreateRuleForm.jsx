import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [useEasySchedule, setUseEasySchedule] = useState(true);
  const [easySchedule, setEasySchedule] = useState({
    frequency: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEasyScheduleChange = (e) => {
    const { name, value } = e.target;
    setEasySchedule((prev) => ({ ...prev, [name]: value }));

    // Generate CRON expression
    if (name === "frequency" || name === "time") {
      const freq = name === "frequency" ? value : easySchedule.frequency;
      const time = name === "time" ? value : easySchedule.time;
      if (freq && time) {
        const [hour, minute] = time.split(":");
        let cron = "";
        if (freq === "DAILY") cron = `${minute} ${hour} * * *`;
        else if (freq === "WEEKLY") cron = `${minute} ${hour} * * 0`;
        else if (freq === "MONTHLY") cron = `${minute} ${hour} 1 * *`;

        setForm((prev) => ({ ...prev, schedule: cron }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const payloadObj = form.payload ? JSON.parse(form.payload) : {};

      await axios.post(
        "http://localhost:5000/api/rules",
        {
          ...form,
          payload: payloadObj,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("✅ Rule created successfully!");
      setForm({ name: "", trigger: "", action: "", schedule: "", payload: "" });
      setEasySchedule({ frequency: "", time: "" });
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to create rule. Please check input or server.");
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
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">Schedule</label>
              <button
                type="button"
                onClick={() => setUseEasySchedule(!useEasySchedule)}
                className="text-sm text-indigo-600 underline"
              >
                {useEasySchedule ? "Switch to CRON mode" : "Switch to Easy mode"}
              </button>
            </div>

            {useEasySchedule ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700">Frequency</label>
                  <select
                    name="frequency"
                    value={easySchedule.frequency}
                    onChange={handleEasyScheduleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select Frequency</option>
                    <option value="DAILY">Every Day</option>
                    <option value="WEEKLY">Every Week (Sunday)</option>
                    <option value="MONTHLY">Every Month (1st)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-700">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={easySchedule.time}
                    onChange={handleEasyScheduleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  name="schedule"
                  value={form.schedule}
                  onChange={handleChange}
                  className="mt-1 block w-full font-mono rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g. 0 9 * * *"
                />
              </div>
            )}
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
