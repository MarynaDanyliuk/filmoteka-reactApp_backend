const app = require("./app");
// const mongoose = require("mongoose");

const port = process.env.PORT || 9000;
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
