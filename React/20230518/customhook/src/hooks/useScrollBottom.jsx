import { useEffect } from "react";
import { useState } from "react";

export default function useScrollBottom() {
  const [isBottom, setIsBotton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBotton(
        Math.ceil(document.documentElement.scrollTop + window.innerHeight + 30) >=
          document.documentElement.offsetHeight
      );
    });
  }, []);
  return isBottom;
}

