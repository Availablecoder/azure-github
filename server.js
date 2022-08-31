const http = require("http");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    `This is Testing Nodejs app deployment from github ripos\n lets see if it can determint the procces.env.MY_WAR=${
      process.env.MY_WAR || "unable to see MY_WAR"
    }`
  );
});

server.listen(port, () => {
  console.log(`Server is running ar port ${port}`);
});
