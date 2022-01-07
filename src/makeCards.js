import BuildingCard from "./BuildingCard";
import "./App.css"

const MakeCards = ({pathLst})=> {
    const lastImage = pathLst.pop().lastImg;
    const arr = pathLst.map((x)=>
    <div>
        <BuildingCard 
            buildingCode={x.from} 
            floor={x.floor}
            cardinality={x.cardinality}
            dest={x.to} 
            img={x.currImg} />
    </div>);


    return (
        <div style={{display:'flex'}}>
            {arr}
            <BuildingCard 
                buildingCode={pathLst.slice(-1)[0].to} 
                floor={-2}
                img={lastImage}/>
        </div>
    );
}

export default MakeCards;