import { useState } from "react";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import "./App.css";

function App() {
  // Sample options for MultiSelect
  const fruitOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
    { value: "kiwi", label: "Kiwi" },
    { value: "strawberry", label: "Strawberry" },
    { value: "pineapple", label: "Pineapple" },
    { value: "mango", label: "Mango" },
  ];

  const [selectedFruits, setSelectedFruits] = useState([]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Vite + React + Tailwind CSS + Headless UI
      </h1>

      <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">MultiSelect Component</h2>
        <MultiSelect
          options={fruitOptions}
          value={selectedFruits}
          onChange={setSelectedFruits}
          placeholder="Select fruits..."
          label="Choose your favorite fruits"
        />
        <div className="mt-2 text-sm text-gray-600">
          Selected: {selectedFruits.map((f) => f.label).join(", ") || "None"}
        </div>
      </div>
    </div>
  );
}

export default App;
