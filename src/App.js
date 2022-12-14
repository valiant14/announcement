import Main from "./componenets/Main";
import React from "react";
import BG from './assets/office/officeBG.mp4'

function App() {
  const [Emptys, SetEmptys] = React.useState(false)

  return (
    // <><video loop="true" autoplay="autoplay" muted id="myVideo">
    //   <source src={BG} type="video/mp4"></source>
    // </video>
    <>
      <>
      <div className="App">
      {/* <video loop="true" autoplay="autoplay" muted id="myVideo">
       <source src={BG} type="video/mp4"></source>
      </video> */}
      <Main />
      </div></>
    </>

  );
}

export default App;
