import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please log in again.");
        }

        const url =
          filter === ""
            ? "http://localhost:3001/api/v1/user/users"
            : "http://localhost:3001/api/v1/user/bulk";

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            filter,
          },
        });

        setUsers(response.data.users || []);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError(err.response?.data?.message || "Failed to fetch users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchUsers();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [filter]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <div className="text-4xl font-extrabold text-gray-800 mb-6">User Management</div>
      <div className="relative">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="Search users by name or email..."
          className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300"
        />
        <span className="absolute right-4 top-3.5 text-gray-500">🔍</span>
      </div>

      {loading && <div className="text-gray-500 text-center">Loading users...</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="space-y-4">
        {users.length > 0 ? (
          users.map((user) => <User key={user._id || user.id} user={user} />)
        ) : (
          !loading && <div className="text-gray-500 text-center">No users found.</div>
        )}
      </div>
    </div>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  const handleSendMoney = () => {
    const userId = encodeURIComponent(user._id || user.id);
    const userName = encodeURIComponent(user.firstName);
    navigate(`/send?id=${userId}&name=${userName}`);
  };

  return (
    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-5">
        <div className="rounded-full h-14 w-14 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center text-2xl font-bold">
          {user.firstName[0]}
        </div>
        <div className="text-gray-700 font-semibold text-lg">
          {user.firstName} {user.lastName}
        </div>
      </div>

      <button
        onClick={handleSendMoney}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-l transform hover:scale-105 transition-transform duration-300"
      >
        Send Money
      </button>
    </div>
  );
}
