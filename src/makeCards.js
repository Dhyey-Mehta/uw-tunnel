import BuildingCard from "./BuildingCard";
import GeneralCard from "./BuildingCard";

const MakeCards = ({pathLst})=> {
    const arr = pathLst.map((x)=>
        <BuildingCard buildingCode={x.from} floor={x.floor} cardinality={x.cardinality} dest={x.to} img={x.currImg} />
    )
    //Card for destination
    arr.push(<GeneralCard title={pathLst.at(-1).to} subTitle="You have arrived at your destination"/>);
    return (
        <div>{arr}</div>
    );
}

export default MakeCards;