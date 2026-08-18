// const http=require("http");
// const myserver=http.createServer((req,res)=>{
//     console.log("New Req Rec.");
//     res.end("Hello From Server");
// });
// myserver.listen(8000,()=>console.log("server started!"));
//==========================================================
// const http = require("http");
// const fs = require("fs");

// const myserver = http.createServer((req, res) => {

//     const log = `${Date.now()}: ${req.url} New Req Received\n`;

//     fs.appendFile("log.txt", log, (err) => {
//         res.end("Hello from server again");
//     });
// });

// myserver.listen(8000, () => console.log("Server started!"));
//==============================================================
const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
switch(req.url){
    case '/':res.end("homepage");
    break;
    case '/about': res.end("Just me, my code, and questionable life choices.");
    break;
    default: res.end("404 not found");

}
});

myserver.listen(8000, () => console.log("Server started!"));