# AccuKnox Dashboard

A React-based dashboard application built with Vite, Redux Toolkit, and modern web technologies.

## Features

- Interactive dashboard with customizable widgets
- Category-based widget organization
- Search functionality for widgets
- Add/remove widgets dynamically
- Responsive design with modern UI

## Tech Stack

- **Frontend**: React 19, Vite
- **State Management**: Redux Toolkit
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Linting**: ESLint

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd accuknox
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project Locally

### Development Server

To start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint for code quality checks:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── store/              # Redux store configuration
│   ├── slices/         # Redux slices
│   └── dashboardData.json  # Initial data
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── assets/             # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
