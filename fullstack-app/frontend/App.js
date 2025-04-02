import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/count")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const incrementCount = () => {
    fetch("http://localhost:5000/api/increment", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Full-Stack React + Express App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
