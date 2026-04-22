const express = require("express");
const path = require("path");

const app = express();
// Change this line:
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// Added '0.0.0.0' so it listens to external requests
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});