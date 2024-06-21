const express = require("express");
// start and instance of express server
const app = express();
const PORT = 3000;

const path = require('path');

// Serve static/public html files
app.use(express.static(path.join(__dirname, "public")));

// Parse through incoming data through your HTTP requests
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});