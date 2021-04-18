 function areaOfCircleRoute(radius, res) {
    // calculate area of circle
    const areaOfCircle = Math.PI * radius * radius;
    const responseObject = {
      areaOfCircle,
    };
      res.setHeader("Content-Type", "application/json");
    res.write("Area of Cicles is "+JSON.stringify(responseObject));
    res.end();
  }
  
  module.exports.areaOfCircleRoute = areaOfCircleRoute;
  