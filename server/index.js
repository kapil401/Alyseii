const path = require("path");
const express = require("express");
const app = express(); // create express app
const webpackConfig=require("../webpack.config");
const webpack = require("webpack");
const commonPaths = require('../build-utils/common-paths');


const compiler = webpack(webpackConfig);
app.use(express.static("public"));
app.use("*", (req, res, next) => {
    const filename = path.join("public", "index.html");
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set("content-type", "text/html");
      res.send(result);
      res.end();
    });
  });
// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});