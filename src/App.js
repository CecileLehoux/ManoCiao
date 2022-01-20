import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import GlobalStyle from "./globalStyle";
import Header from "./components/Header";
import InsideOutsidePage from "./components/InsideOutsidePage";
import HouseRoomPage from "./components/HouseRoomPage";
import ToDoPage from "./components/ToDoPage";
// import ColorThief from "./components/ColorThief";
import ChooseImg from "./components/ChooseImg";

function App() {
  return (
    <div className="App">
      {/* <DragAndDrop/> */}
      {/* <ColorThief /> */}
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<InsideOutsidePage />} />
          <Route path="/RoomChoice" element={<HouseRoomPage />} />
          <Route path="/ToDoPage" element={<ToDoPage />} />
          <Route path="/ChooseImg" element={<ChooseImg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
