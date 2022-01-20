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
import ToDoPage from "./components/ToDoPage";
import CurrationPage from "./components/Curration";
import ColorPage from "./components/ColorPage";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<InsideOutsidePage />} />
          <Route path="/RoomChoice" element={<HouseRoomPage />} />
          <Route path="/ToDoPage" element={<ToDoPage />} />
          <Route path="/CurrationPage" element={<CurrationPage />} />
          <Route path="/ColorPage" element={<ColorPage/>} />
          <Route path="/ProductsPage" element={<ProductsPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;