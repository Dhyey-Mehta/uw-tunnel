const mongo = require("./mongo-connect");

const exampleJSON = [
    {name:"Quantum-Nano Centre"},
    {code: "E3"},
    {connections: [
        {building:"CPH", floor:2, cardinality: "West" },
        {building:"E5", floor:4, cardinality:"East"},
        {building:"DC", floor:1, cardinality:"North"},
        {building:"EIT", floor:3, cardinality:"West"}
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