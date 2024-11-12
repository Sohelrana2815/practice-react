import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function

    if (count >= 10) {
      clearInterval(interval);
      console.log("Interval cleared at 10 seconds");
    }
    return () => {
      clearInterval(interval);
    };
  }, [count]); // Only run once

  return <h1>Timer: {count}</h1>;
};

export default App;
