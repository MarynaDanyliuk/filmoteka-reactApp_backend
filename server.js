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

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server running. Use our API on port: 3000`);
// });

// const { DB_HOST, PORT = 3000 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => app.listen(PORT))
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });
