const express = require("express");
const dbFunctions = require("./databaseFunctions")
const app = express();

const port = 4040;

app.get("/route/:start/:end", (req,res)=>{
  const start = req.params.start;
  const end = req.params.end;

})

app.listen(port, ()=>{
  console.log(`App listening on port: ${port}`);
})