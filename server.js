const http = require("http");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    `We are Changed Some From github after changing from azure things ${
      process.env.MY_WAR || "unable to see MY_WAR"
    }`
  );
});

server.listen(port, () => {
  console.log(`Server is running ar port ${port}`);
});
