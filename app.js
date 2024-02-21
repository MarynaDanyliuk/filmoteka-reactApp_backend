const express = require("express");
const moviesRouter = require("./routes/movies");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/movies", moviesRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

// const port = process.env.PORT || 9001;
// app.listen(port, () => console.log(`Listening to port ${port}`));

module.exports = app;

// const logger = require("morgan");
// const cors = require("cors");

// // const booksRouter = require("./routes/api/books");
// const moviesRouter = require("./rotes/api/movies");

// const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
// app.use(cors());
// app.use(express.json());

// // app.use("/api/books", booksRouter);
// app.use("/api/movies", moviesRouter);

// const express = require("express");
// const fs = require("fs/promises");
// const cors = require("cors");
// require("dotenv").config();

// const books = require("./books");

// const app = express();

// app.use(cors());

// app.use(async (req, res, next) => {
//   console.log("First middleware");

//   const { method, url } = req;
//   await fs.appendFile("./example/server.log", `${method} ${url}`);
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/filmoteka-reactApp/library/watched", (req, res) => {
//   res.json("Куку!");
// });

// app.get("/watched", (req, res) => {
//   res.json([]);
// });

// app.get("/books", (req, res) => {
//   res.json(books);
// });

// app.use(async (req, res, next) => {
//   res.status(404).json("Not found");
// });

// app.listen(3000, () => {
//   console.log("Example app listening on port 3000!");
// });

// const http = require("http");
// request - объект, описывающий весь запрос
// response - объект, описывающий весь ответ

// const server = http.createServer((request, response) => {
//   const { url } = request;
//   if (url === "/") {
//     response.write("<h2>Home page</h2>");
//   } else if (url === "/contacts") {
//     response.write("<h2>Contacts page</h2>");
//   } else {
//     response.write("<h2>Not found</h2>");
//   }
//   response.end();
// });

// server.listen(3000, () => {
//   console.log("Сервер запущен!");
// });

// ___________________________________
// const date = new Date();

// console.log(`Today is ${date.getFullYear()}`);

// _____________________________________

// const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");

// const authRouter = require("./routes/api/auth");
// // const noticesRouter = require("./routes/api/notices");
// // const petsRouter = require("./routes/api/pets");
// // const newsRouter = require("./routes/api/news");
// // const ourFriends = require("./routes/api/friends");

// const { HttpError } = require("./helpers");

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("../public/swagger.json");

// const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use("/api/users", authRouter);
// // app.use("/api/notices", noticesRouter);
// // app.use("/api/pets", petsRouter);
// // app.use("/api/news", newsRouter);
// // app.use("/api/friends", ourFriends);

// app.use((req, res, next) => {
//   next(new HttpError(404));
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

// module.exports = app;
