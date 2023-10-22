const express = require('express');
const app = express(); 

app.use((req, res, next) => {
  console.log("This middleware always runs!");
  next();
});

app.use('/addproduct', (req, res, next) => {
  console.log("In the middleware!");
  res.send("The Add Product Page");
});

app.use('/', (req, res, next) => {
  console.log("In another middleware!");
  res.send("Hello from Express");
});

app.listen(process.env.PORT, () => {
  console.log("Your server is running");
});
