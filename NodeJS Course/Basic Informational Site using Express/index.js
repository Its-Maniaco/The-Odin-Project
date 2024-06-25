const express = require("express")
const app = express()
const path = require("path")

const PORT = 3000 || process.env.PORT

// middleware to use static files
app.use(express.static(path.join(__dirname, "public"))); // this will only server when link matches exactly, so add .html in index.html link routes
/*
    `express.static` will serve the correct HTML files based on the link.
    Any request for a file in this directory will automatically be handled by Express.
    That's why no need to explicitly define routes
*/

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// listening after set up good practice
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
