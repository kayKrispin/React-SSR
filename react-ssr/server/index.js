const express = require("express");
const app = express();

const router = express.Router();

const PORT = "8080";

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a baserfrefeferreefeic express App");
});


app.use(router);

app.listen(PORT, () => console.log(`Running on port, ${PORT}`));



