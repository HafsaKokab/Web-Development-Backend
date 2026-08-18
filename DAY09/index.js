/*
Handler: Function that handles a request and sends a response.
GET: Used to read/fetch data.
POST: Used to send/create new data.
PUT: Used to update existing data.
PATCH: Used to partially update data.
DELETE: Used to delete data
*/
const express=require("express");
const app=express();

app.get("/", (req, res) => {
    return res.end("Welcome Home  where the code works sometimes.");
});


app.get("/about",(req,res)=>{
  return res.send(
    "From About Page" +
    " hey " +
    req.query.myname +
    " you are " +
    req.query.age +
    " and still asking 'why is my code not working?' "
);
})
app.listen(8001, () => console.log("Server started!"));

