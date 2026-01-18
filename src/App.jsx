import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/DashboardWireframe";
import Customers from "./components/Customers";
import WorkOrders from "./components/WorkOrders";
import InstallationDetail from "./components/InstallationDetail";
import Settings from "./components/Settings";

export default function App() {
  const online = navigator.onLine;
  return (
    <div className="app">
      <header className="app-header">
        <h1>Koeltechniekmonteurs</h1>
        <div className={"status " + (online ? "online" : "offline")}>{online ? "Online" : "Offline"}</div>
      </header>

      <nav className="main-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/customers">Klanten</Link>
        <Link to="/workorders">Werkbonnen</Link>
        <Link to="/settings">Instellingen</Link>
      </nav>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:customerId/installations/:installationId" element={<InstallationDetail />} />
          <Route path="/workorders" element={<WorkOrders />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}