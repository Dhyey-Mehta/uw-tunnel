const mongo = require("./mongo-connect");
const client = mongo.client;


//testConnection: Tests connection to mongoDB database
//   void -> Bool
const testConnection = async () => {
  try{
    await client.connect();
    console.log("Successfully connected to client!");
    await client.close();
    return true;
  }
  catch(err){
    console.log("Error! ");
    console.log(err);
    return false;
  }
}


//getPath: Uses BFS on database to find a path from "start" to "end"
//    start:Str end:Str -> (array string) or false
const getPath = async (start,end) => {
  //DB connection stuff
  await client.connect();
  const db = client.db("uw-tunnel");

  //checks in cache for path, if one exists

    const checkForCache = await db.collection("cache").findOne({start:start, end:end},{path:1, _id:0});

    if (checkForCache != null){
      return checkForCache.path;
    }
  
  //Backtrace object used for pathing after BFS is done
  backtrace = {};

  //backtracefn: Takes in a "backtrace" object and returns a path 
  //   from start to end
  //backtracefn: backJson:Json start:Str end:Str -> (array string) or false
  const backtracefn = (backJson,start,end,lastImage) =>{
    path = [];
    curr = end;
    while (curr!=start){
      path.unshift(backJson[curr]);
      curr = backJson[curr].from;
    }
    path.push({lastImg:lastImage})
    cache(start,end,path);
    return path;
  }

  //Classic BFS
  let q = [];
  let visited = [];
  q.push(start);
  visited.push(start);
  while (q.length!=0){
    curr = q.shift();

    //Desired end has been found
    if (curr==end){
      //Inserting image of destination
      const query = await db.collection(end).find({},{projection: {_id:0, imgLnk:1,connections:1}}).toArray();
      lastImg = query.find(element=> ("imgLnk" in element)).imgLnk;
      client.close();
      return backtracefn(backtrace,start,end,lastImg);
    }

    //Searches for all connections to the current node in DB
    currData = await db.collection(curr).find({},{projection: {_id:0, imgLnk:1,connections:1}}).toArray();
    const img = currData.find(element=> ("imgLnk" in element)).imgLnk;
    const neighbours = currData.find(element=> ("connections" in element)).connections;
    neighbours.forEach(neighbour => {
      if (! visited.includes(neighbour.code)){
        q.push(neighbour.code);
        visited.push(neighbour.code);
        backtrace[neighbour.code] = {from:curr,
                                     to:neighbour.code,
                                     cardinality:neighbour.cardinality,
                                     floor:neighbour.floor,
                                     currImg:img};
      }});
  }
  
  //No path found:
  client.close();
  return false;
}

//checkBuildingExists: Returns true if all elements in the array buildingNames exists
//   in the database, false otherwise
// (array Str) -> Bool
const checkBuildingExists = async (buildingNames) =>{
  await client.connect();
  const db = client.db("uw-tunnel");
  const collectionsUnprocessed = await db.listCollections().toArray();
  client.close();
  const collections = collectionsUnprocessed.map(x=>x.name);
  let result = true;
  buildingNames.forEach((elem)=>{
    if (!collections.includes(elem)){
      result = false;
    }
  });
  return result;
}

//cache: Stores a computed path from start to end in the database for future reference
// Str Str (array Object) -> Void
const cache = async (start,end,path)=>{
  await client.connect();
  const db = client.db("uw-tunnel");

  await db.collection("cache").insertOne({start:start,end:end,path:path});
  client.close();
}

//Export for use in other files 
module.exports = {getPath,checkBuildingExists,testConnection,cache}