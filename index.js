const express = require('express');
const log = require('./routes/log');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

app.use('/log', log);

app.get('/', (req, res) => {
    return res.status(200).json({msg: "Hello, Muggles 🧙"});
});

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log(`Server Running at ${PORT} 🔥🔥🔥`);
});