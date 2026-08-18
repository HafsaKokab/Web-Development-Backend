
/*
fs → Node.js File System module; writeFileSync() writes data to a file synchronously.
Synchronous → The program waits until the file operation is completed before moving to the next line.
 */
const fs=require("fs");
// fs.writeFileSync("./test.txt","Brain: offline. VS Code: still running.");

/*
Asynchronous → Does not block the code; other operations can run while it completes.
*/

//fs.writeFile("./test.txt","Brain: offline. VS Code: still running.",(err)=>{});
 //=============================
/*
readFileSync() → Synchronous; reads the file and returns the result.
readFile() → Asynchronous; uses a callback and does not return the file data directly.
*/

 //reading the file
//  const result=fs.readFileSync("./contacts.txt","utf-8");
//  console.log(result);
//==============================
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });
//================================
//fs.appendFileSync("./test.txt",'“Plot twist: the bug was me.\n');
//================================
//copy or del a file
//fs.cpSync("./test.txt","./copy.txt");
//fs.unlinkSync("./copy.txt");
//to get info about file
console.log(fs.statSync("./test.txt"));