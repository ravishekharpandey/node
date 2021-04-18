const http = require("http");
const url = require("url");
const areaOfCircleFile = require("./route/circle");
const volumeOfSphereFile = require("./route/volumeOfSphere");
const fruitsDataFile = require("./route/vegData");
http
  .createServer(function (req, res) {
    const path = req.url;
    const queryParamsObject = url.parse(path, true).query;
    if (path.includes("areaOfCircle")) {
      const radius = queryParamsObject.radius;
      areaOfCircleFile.areaOfCircleRoute(radius, res);
    } else if (path.includes("volumeOfSphere")) {
      const radius = queryParamsObject.radius;
      volumeOfSphereFile.volumeOfSphere(radius, res);
    } else if (path.includes("vegData")) {
      const pathString = `${__dirname}/local/vegData.json`;
      fruitsDataFile.fruitsDataRoute(pathString, res);
    }else if (path.includes("age")){

    } else {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Hello World<h1>");
      res.write("<h2>Site description</h2>");
      res.end();
    }
  })
  .listen(8080);
