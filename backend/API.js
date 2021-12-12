const express = require("express");
const db = require("./databaseFunctions")
const app = express();

const port = 4040;

//Allows for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/route/:start/:end", async (req,res)=>{
  const start = req.params.start;
  const end = req.params.end;

  const exists = await db.checkBuildingExists([start,end]);

  if (!exists){
    res.status(404).send("No Path!");
  }
  else{
    const path = await db.getPath(start,end);
    res.status(200).send({"path":path});
  }
})

app.listen(port, ()=>{
  console.log(`App listening on port: ${port}`);
})