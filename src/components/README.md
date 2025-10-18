# Components

This directory contains reusable UI components for the application.

## Button Component

A customizable button component built with Headless UI and styled with Tailwind CSS.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | node | required | Button content |
| variant | string | 'primary' | Button style variant: primary, secondary, success, danger, warning, outline, ghost, link |
| size | string | 'md' | Button size: sm, md, lg, xl |
| disabled | bool | false | Disables the button |
| onClick | function | undefined | Click handler |
| className | string | '' | Additional CSS classes |
| type | string | 'button' | Button type: button, submit, reset |

### Usage

```jsx
import Button from './components/Button';

// Basic usage
<Button onClick={() => console.log('Clicked!')}>Click me</Button>

// With variant and size
<Button variant="success" size="lg">Large Success Button</Button>

// Disabled state
<Button disabled>Disabled Button</Button>

// With additional classes
<Button className="mt-4">Custom Styled Button</Button>
```