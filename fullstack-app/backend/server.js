const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let count = 0;

app.get("/api/count", (req, res) => {
  res.json({ count });
});

app.post("/api/increment", (req, res) => {
  count += 1;
  res.json({ count });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
