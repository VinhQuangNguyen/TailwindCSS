import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Vite + React + Tailwind CSS + Headless UI</h1>
      
      <div className="mb-8 text-center">
        <p className="text-lg mb-6">This is a demo of the reusable Button component</p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <Button 
            variant="primary"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </Button>
          
          <Button 
            variant="secondary"
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => setCount((count) => count * 2)}
          >
            Double Count
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button 
            variant="success"
            size="lg"
          >
            Success Action
          </Button>
          
          <Button 
            variant="danger"
            size="lg"
          >
            Danger Action
          </Button>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
