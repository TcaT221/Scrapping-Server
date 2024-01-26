const express = require('express');

const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`🔊  Server started at port ${port}`);
})