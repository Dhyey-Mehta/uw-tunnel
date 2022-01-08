import BuildingCard from "./BuildingCard";
import "./App.css"

const MakeCards = ({pathLst})=> {
    const lastImage = pathLst.pop().lastImg;
    const destName = pathLst.slice(-1)[0].to;
    const arr = pathLst.map((x)=>
    <div key={x.from}>
        <BuildingCard 
            buildingCode={x.from} 
            floor={x.floor}
            cardinality={x.cardinality}
            dest={x.to} 
            img={x.currImg} />
    </div>);


    return (
        <div>
            <p style={{textAlign:'center',fontSize:30,}}>Path from {pathLst[0].from} to {destName}: </p>
            <div style={{display:'flex'}}>
                {arr}
                <BuildingCard 
                    buildingCode={destName} 
                    floor={-2}
                    img={lastImage}/>
            </div>
        </div>
    );
}

export default MakeCards;