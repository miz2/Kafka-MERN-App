const RuleTable = ({ rules, onEdit, onDelete }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Trigger</th>
              <th className="border p-2 text-left">Action</th>
              <th className="border p-2 text-left">Schedule</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((rule) => (
              <tr key={rule._id}>
                <td className="border p-2">{rule.name}</td>
                <td className="border p-2">{rule.trigger}</td>
                <td className="border p-2">{rule.action}</td>
                <td className="border p-2">{rule.schedule || "Not scheduled"}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    onClick={() => onEdit(rule._id)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(rule._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RuleTable;