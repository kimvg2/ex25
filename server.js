const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json({'msg': 'I eat tosti. nomnom'})
});

app.listen(8080, () => {
    console.log('Server is ready')
});