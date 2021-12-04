const express = require("express");
const dbFunctions = require("./databaseFunctions")
const app = express();

const port = 4040;

app.get("/route/:start/:end", async (req,res)=>{
  const start = req.params.start;
  const end = req.params.end;

  const exists = await dbFunctions.checkBuildingExists([start,end]);
  if (!exists){
    res.send("No Path!");
  }
  else{
    const path = await dbFunctions.getPath(start,end);
    res.send({"path":path});
  }
})

app.listen(port, ()=>{
  console.log(`App listening on port: ${port}`);
})