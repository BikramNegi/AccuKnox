import { lazy, Suspense } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
