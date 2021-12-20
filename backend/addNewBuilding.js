const mongo = require("./mongo-connect");

const exampleJSON = [
    {name:"Engineering 5"},
    {code: "E5"},
    {imgLnk:"https://images.adsttc.com/media/images/5fc0/5c21/63c0/17dd/6300/0d91/newsletter/FI.jpg?1606442005"},
    {connections: [
        {code:"E3",floor:3, cardinality:"SW"},
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