import React from "react";

function Dropdown({ companies, selectedCompany, setSelectedCompany }) {
  return (
    <div className="mb-6 flex justify-center">
      <select
        className="bg-gray-800 text-white p-3 rounded-lg border border-gray-700"
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        <option value="">Select a company</option>
        {companies.map((company, index) => (
          <option key={index} value={company}>
            {company.replace(/_/g, " ")}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
