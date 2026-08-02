import { Routes, Route, Navigate } from "react-router-dom";

import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/marketplace" replace />}
      />

      <Route
        path="/marketplace"
        element={<Marketplace />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

    </Routes>
  );
}

export default App;