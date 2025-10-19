import React, { useState } from 'react';
import MultiSelect from './MultiSelect';

const MultiSelectDemo = () => {
  // Sample options
  const fruitOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'kiwi', label: 'Kiwi' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'mango', label: 'Mango' },
    { value: 'peach', label: 'Peach' },
    { value: 'pear', label: 'Pear' },
  ];

  const colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'purple', label: 'Purple' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Pink' },
    { value: 'brown', label: 'Brown' },
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
  ];

  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedColors, setSelectedColors] = useState([
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' }
  ]);
  const [selectedDisabled, setSelectedDisabled] = useState([]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">MultiSelect Component Demo</h1>
      
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Basic MultiSelect</h2>
        <MultiSelect
          options={fruitOptions}
          value={selectedFruits}
          onChange={setSelectedFruits}
          placeholder="Select fruits..."
          label="Choose your favorite fruits"
        />
        <div className="mt-2 text-sm text-gray-600">
          Selected: {selectedFruits.map(f => f.label).join(', ') || 'None'}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Pre-selected Options</h2>
        <MultiSelect
          options={colorOptions}
          value={selectedColors}
          onChange={setSelectedColors}
          placeholder="Select colors..."
          label="Choose colors (pre-selected)"
        />
        <div className="mt-2 text-sm text-gray-600">
          Selected: {selectedColors.map(c => c.label).join(', ') || 'None'}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Disabled MultiSelect</h2>
        <MultiSelect
          options={fruitOptions}
          value={selectedDisabled}
          onChange={setSelectedDisabled}
          placeholder="This is disabled..."
          label="Disabled MultiSelect"
          disabled={true}
        />
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Custom Placeholder & Label</h2>
        <MultiSelect
          options={fruitOptions}
          value={[]}
          onChange={() => {}}
          placeholder="Search and select food items..."
          label="Food Preferences"
        />
      </div>
    </div>
  );
};

export default MultiSelectDemo;