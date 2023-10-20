const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("This middleware always run!");
  next();
});
app.use("/add-product", (req, res, next) => {
  console.log("In the middleware!");
  res.send('The "Add Product" Page');
});
app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("Hello from Express");
});

app.listen(3000, () => {
  console.log("your server is running");
});
