const express = require("express");
const { connectDB } = require("./db");
const articuloRoute = require("./routes/articulo");

// settings
connectDB();
const app = express();

//validation
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", articuloRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// server listening
app.listen(port, () => console.log("Server listening to", port));

