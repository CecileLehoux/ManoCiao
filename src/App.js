import React from "react";
import "./App.css";
import DragAndDrop from "./components/DragAndDrop";
import ColorThief from "./components/ColorThief";

function App() {
  return (
    <div className="App">
      <DragAndDrop/>
      <ColorThief/>
    </div>
  );
}

export default App;