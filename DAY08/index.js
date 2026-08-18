/*
URL:  uniform Resource locator
------------------------------
https://www.piyushgarg.dev/

HTTPS → HyperText Transfer Protocol Secure
piyushgarg.dev → Domain name (user-friendly name of the server/IP address)
/ → Root path / homepage

 */
// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myserver = http.createServer((req, res) => {

//     if (req.url === "/favicon.ico") return res.end();

//     const log = `${Date.now()}: ${req.url} New Request Received\n`;

//     const myurl = url.parse(req.url);
//     console.log(myurl);

//     fs.appendFile("log.txt", log, (err) => {
//         if (err) console.log("Error:", err);
//     });

//     switch (req.url) {

//         case "/":
//             res.end("homepage");
//             break;

//         case "/about":
//             res.end("Just me, my code, and questionable life choices.");
//             break;

//         default:
//             res.end("404 not found");
//     }
// });

// myserver.listen(8001, () => console.log("Server started!"));
//================================
const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {

    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url} New Request Received\n`;

    const myurl = url.parse(req.url, true);
    console.log(myurl);

    fs.appendFile("log.txt", log, (err) => {
        if (err) console.log("Error:", err);
    });

    switch (myurl.pathname) {

        case "/":
            res.end("homepage");
            break;

        case "/about":
            const username = myurl.query.myname;
            res.end(`Hi ${username}, your code is waiting… and so is your next bug.`);
            break;
        case "/search":
            const search=myurl.query.myname;
            res.end("here are your result for "+ search);

        default:
            res.end("404 not found");
    }
});

myserver.listen(8001, () => console.log("Server started!"));