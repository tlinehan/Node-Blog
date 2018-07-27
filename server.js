const express = require('express');

const port = 8000;

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Welcome to "Node-Blog" project!</h1>');
})

server.listen(port, () => console.log(`Server running on ${port}`));