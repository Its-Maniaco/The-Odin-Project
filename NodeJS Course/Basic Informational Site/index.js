const http = require("http");
const fs = require("fs");
const url = require("url");
const HOSTNAME = 'localhost';

const PORT = 3000 || process.env.PORT

http.createServer(function (req, res) {
    const reqUrl = url.parse(req.url);
    const reqPath = reqUrl.pathname;
    // TODO: replace with route map
    switch (reqPath) {
        case "/":
            returnPageStatus("public/index.html", res)
            break;
        case "/about":
            returnPageStatus("public/about.html", res)
            break;
        case "/contact-me":
            returnPageStatus("public/contact-me.html", res)
            break;
        default:
            returnPageStatus("", res)
            break;
    }

}).listen(PORT, HOSTNAME, ()=> {
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
})

function returnPageStatus(fName, res) {
    // check existance before calling
    fs.stat(`${fName}`, (err, stats) => {
        res.setHeader('Content-Type', 'text/html');
        // if file is found, set header and deliver html file as stream
        if (stats) {
            res.statusCode = 200;
            fs.createReadStream(fName).pipe(res);
        }
        else {
            res.statusCode = 404
            //TODO: check for this file existance
            fs.createReadStream(`./404.html`).pipe(res);
        }
    });
}