const express = require("express");
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join('D:\\my files\\2015 miu\\WAP\\2023temp\\cs472\\lab12practice','public')));

app.use(express.json());

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/routes/users', usersRouter);
app.use('/routes/products', productsRouter);
app.get('/', (req, res) => {
    res.sendFile(path.join('D:\\my files\\2015 miu\\WAP\\2023temp\\cs472\\lab12practice', 'views', 'index.html'));
});
app.use((req, res, next) => {
    res.status(404).sendFile(path.join('D:\\my files\\2015 miu\\WAP\\2023temp\\cs472\\lab12practice', 'views', 'error404.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.set("json spaces", 2);
app.listen(3007, () => console.log("The server is running on port 3007"));