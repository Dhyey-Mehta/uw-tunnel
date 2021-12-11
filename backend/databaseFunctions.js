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
  
  //Backtrace object used for pathing after BFS is done
  backtrace = {};

  //backtracefn: Takes in a "backtrace" object and returns a path 
  //   from start to end
  //backtracefn: backJson:Json start:Str end:Str -> (array string) or false
  const backtracefn = (backJson,start,end) =>{
    path = [];
    path.push(end);
    curr = backJson[end];
    while (curr!=start){
      path.unshift(curr);
      curr = backJson[curr];
    }
    path.unshift(start);
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
      client.close();
      return backtracefn(backtrace,start,end);
    }

    //Searches for all connections to the current node in DB
    conns = await db.collection(curr).findOne({connections:{$exists:true}});
    neighbours = conns.connections
    neighbours.forEach(neighbour => {
      if (! visited.includes(neighbour.building)){
        q.push(neighbour.building);
        visited.push(neighbour.building);
        backtrace[neighbour.building] = curr;
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

//Export for use in other files 
module.exports = {getPath,checkBuildingExists,testConnection}