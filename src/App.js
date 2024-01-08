import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Accueil from "./Components/Accueil";
import AddExcuse from "./Components/AddExcuses";
import Excuses from "./Components/Excuses";
import HttpCode from "./Components/HttpCode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/excuses" element={<Excuses />} />
        <Route path="/add" element={<AddExcuse />} />
        <Route path="/excuses/:http_code" element={<HttpCode />} />
      </Routes>
    </Router>
  );
}

export default App;
