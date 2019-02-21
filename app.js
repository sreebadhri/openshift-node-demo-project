const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('OpenShift Home Page!');
});

app.get('/hello', (req, res) => {
    res.send('Hello OpenShift!');
});

app.get('/hello/:name', (req, res) => {
    res.send('Hello Mr.' + req.params.name + ' to OpenShift World!');
});

app.listen(8080, () => console.log('App listening on port 3000!'));
