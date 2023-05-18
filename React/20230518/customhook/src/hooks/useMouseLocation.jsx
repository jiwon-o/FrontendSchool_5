import { useState, useEffect } from "react";

export function useMouseLocation(initVal) {
   const [mouseLocation, setMouseLocation] = useState(initVal || { x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMouseLocation({ x: event.x, y: event.y });
    });
  }, []);

  return mouseLocation;
}


