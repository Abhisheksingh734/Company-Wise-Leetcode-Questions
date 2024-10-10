import React, { useState, useEffect } from "react";
import questions from "./data/questions.json"; // Adjust the path as necessary
import Dropdown from "./components/Dropdown";
import QuestionTable from "./components/QuestionTable";

function App() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [companies, setCompanies] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [markedRows, setMarkedRows] = useState({}); // Initialize as empty

  // Load marked rows from localStorage when the component mounts
  useEffect(() => {
    const savedMarkedRows = localStorage.getItem("markedRows");
    if (savedMarkedRows) {
      setMarkedRows(JSON.parse(savedMarkedRows));
      console.log(
        "Loaded marked rows from localStorage:",
        JSON.parse(savedMarkedRows)
      );
    }
  }, []);

  // Extract unique company names from questions
  useEffect(() => {
    const uniqueCompanies = [...new Set(questions.map((q) => q.company))];
    setCompanies(uniqueCompanies);
  }, []);

  // Filter questions based on selected company
  useEffect(() => {
    if (selectedCompany) {
      const filtered = questions.filter(
        (q) => q.company.toLowerCase() === selectedCompany.toLowerCase()
      );
      setFilteredData(filtered);
      console.log("Filtered data:", filtered);
    } else {
      setFilteredData([]);
    }
  }, [selectedCompany]);

  // Save marked rows to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("markedRows", JSON.stringify(markedRows));
    console.log("Saved marked rows to localStorage:", markedRows);
  }, [markedRows]);

  // Toggle row marking
  const handleMark = (id) => {
    setMarkedRows((prevMarked) => {
      const newMarked = {
        ...prevMarked,
        [id]: !prevMarked[id], // Toggle the marked state
      };
      console.log("Toggled mark for ID:", id, "New marked rows:", newMarked);
      return newMarked;
    });
  };

  return (
    <div className="App bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Leetcode Company-wise Questions
      </h1>
      <Dropdown
        companies={companies}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
      {filteredData.length > 0 && (
        <QuestionTable
          filteredData={filteredData}
          markedRows={markedRows}
          handleMark={handleMark}
        />
      )}
    </div>
  );
}

export default App;
