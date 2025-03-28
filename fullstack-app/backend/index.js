const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS to allow frontend to access backend
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

// Set PORT to 5000 and listen on 0.0.0.0
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
