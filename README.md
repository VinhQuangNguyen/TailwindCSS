# React + Vite + Authentication App

This template provides a minimal setup to get React working in Vite with HMR, ESLint rules, and a complete authentication system using shadcnUI components.

## Features

- **Login System**: Email/password authentication with mock data
- **Protected Routes**: Authentication-based route protection
- **Home Page**: Simple home page accessible after login
- **shadcnUI Components**: Modern UI components with Tailwind CSS
- **TypeScript**: Full TypeScript support with proper typing

## Demo Credentials

- Email: `admin`
- Password: `123123`

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling and dev server
- **React Router** for client-side routing
- **shadcnUI** for UI components
- **Tailwind CSS** for styling
- **Radix UI** for accessible components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/signin` (or just `http://localhost:5173` and it will redirect)

## Authentication Flow

1. **Login Page** (`/signin`): Users can enter credentials (admin/123123)
2. **Home Page** (`/`): Protected page accessible only after successful login
3. **Logout**: Users can logout from the home page, which redirects back to login

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcnUI components
│   └── ProtectedRoute.tsx  # Route protection component
├── pages/
│   ├── Login.tsx          # Login page
│   └── Home.tsx           # Home page
├── lib/
│   └── utils.ts           # Utility functions
└── App.tsx                # Main app with routing
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
