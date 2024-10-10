import React from "react";

function QuestionTable({ filteredData, markedRows, handleMark }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 shadow-md rounded-lg">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Difficulty
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Acceptance
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Link
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
              Mark
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {filteredData.map((task) => (
            <tr
              key={task.ID}
              className={
                markedRows[task.ID]
                  ? "bg-green-900 hover:bg-green-950 transition-all ease-in-out"
                  : "hover:bg-gray-700 transition-all ease-in-out"
              }
            >
              <td className="px-6 py-4 border-b text-lg font-semibold text-gray-100">
                <a
                  href={task["Leetcode Question Link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {task.Title}
                </a>
              </td>
              <td className="px-6 py-4 border-b">
                <button
                  className={`m-2 p-2 px-4 rounded-3xl text-white ${
                    task.Difficulty.toLowerCase() === "easy"
                      ? "bg-green-500"
                      : task.Difficulty.toLowerCase() === "medium"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {task.Difficulty}
                </button>
              </td>
              <td className="px-6 py-4 border-b text-gray-300">
                {task.Acceptance}
              </td>
              <td className="px-6 py-4 border-b text-blue-400">
                <a
                  href={task["Leetcode Question Link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Leetcode Link
                </a>
              </td>
              <td className="px-6 py-4 border-b text-center">
                <input
                  type="checkbox"
                  checked={!!markedRows[task.ID]} // Ensure boolean value
                  onChange={() => handleMark(task.ID)}
                  className="w-6 h-5 text-yellow-500 bg-gray-700 border-gray-500 rounded focus:ring-0"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuestionTable;
