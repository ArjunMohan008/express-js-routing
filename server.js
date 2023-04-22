// server.js - main server file
const express = require('express');
const app = express();

const postsRouter = require('./routes/posts');

app.use('/api/posts', postsRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});