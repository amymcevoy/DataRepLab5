const express = require('express');
const app = express();
const port = 3000;

//message
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

//Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//Starting server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
