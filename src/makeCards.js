import BuildingCard from "./BuildingCard";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const MakeCards = ({pathLst})=> {
    const arr = pathLst.map((x)=>
    <div>
        <BuildingCard buildingCode={x.from} floor={x.floor} cardinality={x.cardinality} dest={x.to} img={x.currImg} />
    </div>
    )
    //Card for destination
    
    return (
        <div>
            <AwesomeSlider>
                {arr}
            </AwesomeSlider>
        </div>
    );
}

export default MakeCards;