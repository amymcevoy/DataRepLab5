const express = require('express');
const app = express();
const port = 3000;

//Route w URL Parameter
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get('/hello/:name/:surname', (req,res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name}, ${surname}`);
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
