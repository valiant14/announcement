import Main from "./componenets/Main";
import React from "react";
import BG from './assets/office/officeBG.mp4'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Announcement from "./componenets/Anouncement";

function App() {
  const [Emptys, SetEmptys] = React.useState(false)

  return (
    <>
      {/* <div className="App">
      <Main />
      </div> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="0" element={<Announcement />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
