import React from "react";
import loaderGif from '../assets/naf-logo-loading.gif'; // adjust path if needed


const preloaderStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "black",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "all",
  transition: "opacity 0.5s",
  // border: "5px solid red" // TEMP: for visibility
};

// const loaderStyle = {
//   width: "60px",
//   height: "60px",
//   border: "6px solid #fff",
//   borderTop: "6px solid #3498db",
//   borderRadius: "50%",
//   animation: "spin 1s linear infinite",
// };


export default function Preloader() {
  return (
    <div id="preloader" style={preloaderStyle}>
       <img style={{ width: "160px", height: "160px" }} src={loaderGif} alt="Loading..." className="preloader-gif" />
    </div>
  );
}