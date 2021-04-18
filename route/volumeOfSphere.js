function volumeOfSphere(radius, res) {
  const volumeOfSphere = 4/3 * Math.PI * radius * radius * radius;
  const responseObject = {
    volumeOfSphere,
  };
  res.setHeader("Content-Type", "application/json");
  res.write("Volume of Sphere is "=JSON.stringify(responseObject));
  res.end();
}

module.exports.volumeOfSphere = volumeOfSphere;
