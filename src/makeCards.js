import BuildingCard from "./BuildingCard";
import GeneralCard from "./BuildingCard";
import AwesomeSlider from 'react-awesome-slider';

const MakeCards = ({pathLst})=> {
    const arr = pathLst.map((x)=>
        <BuildingCard buildingCode={x.from} floor={x.floor} cardinality={x.cardinality} dest={x.to} img={x.currImg} />
    )
    //Card for destination
    
    return (
        <div>{arr}</div>
    );
}

export default MakeCards;