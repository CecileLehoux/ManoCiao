import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from 'react';
import GlobalStyle from './globalStyle';
import Header from './components/Header';
import InsideOutsidePage from "./components/InsideOutsidePage";
import HouseRoomPage from "./components/HouseRoomPage";



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<InsideOutsidePage />} />
          <Route path="/RoomChoice" element={<HouseRoomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;