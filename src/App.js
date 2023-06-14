// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayersSetup from "./pages/PlayersSetup";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayersSetup />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
