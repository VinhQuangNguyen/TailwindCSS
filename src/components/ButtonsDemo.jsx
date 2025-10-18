import React from 'react';
import Button from './Button';

const ButtonsDemo = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Button Component Demo</h1>
      
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Variants</h2>
        <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 rounded-lg">
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

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Disabled State</h2>
        <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Button disabled>Disabled Button</Button>
          <Button variant="success" disabled>Disabled Success</Button>
          <Button variant="danger" disabled>Disabled Danger</Button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Custom Styling</h2>
        <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Button className="bg-purple-600 hover:bg-purple-700">Custom Purple</Button>
          <Button className="rounded-full">Round Button</Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">Gradient</Button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Button Types</h2>
        <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Button type="button">Type: Button</Button>
          <Button type="submit">Type: Submit</Button>
          <Button type="reset">Type: Reset</Button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">With Icons</h2>
        <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Button>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            With Icon
          </Button>
          <Button variant="outline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsDemo;