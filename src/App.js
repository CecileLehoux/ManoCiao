import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import GlobalStyle from "./globalStyle";
import Header from "./components/Header";
import InsideOutsidePage from "./components/InsideOutsidePage";
import UploadImg from "./components/UploadImg";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<InsideOutsidePage />} />
        </Routes>
      </Router>
      <UploadImg />
    </div>
  );
}

export default App;