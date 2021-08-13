import { useState, useEffect } from "react";

function getSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

function useWindowSize() {
  const [size, setSize] = useState(getSize());

  const handler = function() {
    setSize(getSize());
  };

  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    }
  }, []);

  return size;
}

export default useWindowSize;