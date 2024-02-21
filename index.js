// Import packages
const express = require("express");
const moviesRouter = require("./routes/api/movies");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/api/movies", moviesRouter);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
