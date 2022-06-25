const dotenv = require("dotenv");
const fs = require("fs");

module.exports = {
  env: dotenv.parse(fs.readFileSync(".env"))
};