# MultiSelect Component

A reusable multi-select component built with Headless UI and styled with Tailwind CSS.

## Features

- Searchable multi-select dropdown
- Tag display for selected options
- Ability to remove selected options
- Accessible UI with keyboard navigation
- Fully customizable through props

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | array | [] | Array of options in the format `{value: string, label: string}` |
| value | array | [] | Array of selected options in the format `{value: string, label: string}` |
| onChange | function | undefined | Callback function when selection changes |
| placeholder | string | "Select options..." | Placeholder text for the input |
| label | string | "" | Label text for the component |
| disabled | boolean | false | Whether the component is disabled |

## Usage

```jsx
import MultiSelect from './components/MultiSelect/MultiSelect';

// Define options
const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'kiwi', label: 'Kiwi' }
];

// Basic usage
<MultiSelect 
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Choose fruits..."
  label="Select Fruits"
/>
```

## Dependencies

Make sure to install `@heroicons/react` for the icons used in this component:

```bash
npm install @heroicons/react
```