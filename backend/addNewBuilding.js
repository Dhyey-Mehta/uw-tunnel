const mongo = require("./mongo-connect");

const exampleJSON = [
    {name:"Biology 2"},
    {code: "B2"},
    {connections: [
    ]}
]


const addNewBuilding = async (building) =>{
    try{
        await mongo.client.connect();
        const db = mongo.client.db("uw-tunnel");
        await db.collection(building[1].code).insertMany(building);
        mongo.client.close();
    }
    catch(err){
        console.log(err);
    }
}

addNewBuilding(exampleJSON);