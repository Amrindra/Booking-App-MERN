const express = require("express");

const app = express();

dotenv.confige();

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
