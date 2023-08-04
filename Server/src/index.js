// const http = require("http");
// const { log } = require("console");
// const { getCharById } = require("./controllers/getCharById");
const express = require("express");
const server = express();
const PORT = 3001;
const { router } = require("./routes/index");
const morgan = require("morgan");

server.use(express.json());

server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log(`Server raised in port; ${PORT}`);
});

// http
//   .createServer((request, response) => {
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     if (request.url.includes("/rickandmorty/character")) {
//       let id = parseInt(request.url.split("/").pop());
//       return getCharById(response, +id);
//       // let id = parseInt(request.url.split("/").pop());
//       // let character = data.find((char) => char.id === id);
//       // return response.end(JSON.stringify(character));
//     } else {
//       return response.end(JSON.stringify({ message: "Character not found" }));
//     }
//   })
//   .listen(3001, "localhost");
