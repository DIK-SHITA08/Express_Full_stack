import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error fetching backend:", err));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Backend Message: {message}</p>
    </div>
  );
}

export default App;
