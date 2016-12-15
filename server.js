const express = require('express');
const app = express();

const port = process.env.PORT  || "8080";

console.log(__dirname);

app.use(express.static(__dirname + '/dist/'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
});

app.listen(port, () => {
        console.log("Exppres Node.js server running on port " + port);
    }
);