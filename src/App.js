import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
