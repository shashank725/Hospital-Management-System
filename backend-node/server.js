const express = require("express");
const compression = require("compression");
const cors = require("./middlewares/cors");
const helmet = require("./middlewares/helemt");
const logging = require("./middlewares/logging");
const http = require("http");
const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet);
app.use(logging);

// GENERAL ROUTE

/*
Method  : GET
Route   : /
Access  : Public
*/
app.get("/", (req, res) => {
  return res.send({
    server: "Care & Cure Hospital",
    status: "online",
    host: req.headers.host,
  });
});

const PORT = process.env.PORT || 8000;
const SERVER = http.createServer(app);

// DATABASE CONNECTION

app.listen(PORT, () => {
  console.log(`Server is up and Running at PORT : ${PORT}`);
});
module.exports = SERVER;
