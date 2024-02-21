// Import packages
const express = require("express");
const moviesRouter = require("./routes/movies");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/movies", moviesRouter);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
