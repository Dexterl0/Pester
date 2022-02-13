const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: __dirname});
});

app.listen(5000, () => {
    console.log('Port 5000')
});