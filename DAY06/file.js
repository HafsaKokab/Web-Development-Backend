/*
Client → Server: Client makes a request → request enters the Event Queue → Event Loop handles it.
Blocking operation (Sync): Goes to the Thread Pool and waits for completion.
Non-blocking operation (Async): Does not block the main thread; handled asynchronously and continues execution.*/

const console = require("console");
const fs=require("fs");
const os=require("os");
// console.log("1");
// // Blocking...
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);
// console.log("2");
//======================
//non blocking
// console.log("1");

// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// console.log("2");
//===========================
console.log(os.cpus().length);
