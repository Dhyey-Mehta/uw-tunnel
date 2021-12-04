const mongo = require("./mongo-connect");
const client = mongo.client;

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

const getPath = async (start,end) => {
  await client.connect();
  const db = client.db("uw-tunnel");
  
  backtrace = {};

  let q = [];
  let visited = [];
  q.push(start);
  visited.push(start);
  while (q.length!=0){
    curr = q.shift();
    if (curr==end){
      client.close();
      return backtracefn(backtrace,start,end);
    }
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

const backtracefn = (backJson,start,end) =>{
  path = [];
  path.push(end);
  curr = backJson[end];
  while (curr!=start){
    curr = backJson[curr];
    path.unshift(curr);
  }
  path.unshift(start);
  return path;
}

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


const test = async () =>{
  console.log(await checkBuildingExists(["E3","SLC","notinDB"]));
}

test();

module.exports = {getPath,checkBuildingExists,testConnection}