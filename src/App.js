import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Excuses from "./Components/Excuses";
import AddExcuse from "./Components/AddExcuses";
import HttpCode from "./Components/HttpCode";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Excuses />}/>
            <Route path="/add" element={<AddExcuse />}/>
            <Route path="/:http_code" element={<HttpCode />} />
        </Routes>
      </Router>
  );
}

export default App;
