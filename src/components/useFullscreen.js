import React, { useRef } from "react";

const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFullscreen, exitFullscreen };
};

export default function UseFullscreen() {
  const onFullscreen = isFullscreen => {
    console.log(isFullscreen ? "It's the fullscreen now" : "It's not the fullscreen")
  }
  const { element, triggerFullscreen, exitFullscreen } = useFullscreen(onFullscreen);
  return (
    <div>
      <h1>11. useFullscreen</h1>
      <div ref={element}>
        <img width="600" alt="Hallstatt in Austria" src="https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1982&q=80" />
        <br />
        <button onClick={exitFullscreen}>Exit from fullscreen</button>
      </div>
      <br />
      <button onClick={triggerFullscreen}>Make the image into fullscreen</button>
    </div>
  );
}
