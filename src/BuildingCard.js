import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import Flippy, {FrontSide,BackSide} from 'react-flippy';
import Images from './images/importImg'

const GeneralCard = ({title,imgLink}) =>{
    return(
        <div>
        <Card sx={{height:280}}>
                <CardMedia 
                component="img"
                image = {imgLink}
                alt={title}
                />
                <CardContent>
                    <Typography gutterBottom={true} variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
        </Card>
        </div>
    )
}


const codeToName = {"B1":"Biology 1","B2":"Biology 2","C2":"Chemistry 2",
"DC":"Davis Centre","E3":"Engineering 3","E5":"Engineering 5",
"EIT":"Center for Environmental & Information Technology","ESC":"Earth Sciences and Chemistry","M3":"Mathematics 3",
"MC":"Mathematics and Computing","PAC":"Physical Activities Complex","QNC":"Quantum-Nano Centre","SLC":"Student Life Centre"};

const BuildingCard = ({buildingCode,floor,cardinality,dest,img}) =>{
    let subText = `Go to floor ${floor} of ${buildingCode} and take the ${cardinality} bridge to ${dest}`;
    if (floor===-1){
        subText = `Head ${cardinality} to ${dest}`;
    }
    else if (floor===-2){
        subText=`You have arrived at your destination!`
    }
    
    return(
    <Flippy
        flipOnHover={true} 
        flipOnClick={true} 
        flipDirection="vertical" 
        style={{ width: '280px', height: '280px' }} 
    >
        <FrontSide>
            <GeneralCard 
                title={codeToName[buildingCode]} 
                imgLink={img}/>
        </FrontSide>
        <BackSide>
            <Card sx={{height:280}}>
                    <CardMedia 
                    component="img"
                    image = {Images[buildingCode]} 
                    alt={buildingCode}
                    />
                    <CardContent>
                        <Typography gutterBottom={true} variant="subtitle1" component="div">
                            {subText}
                        </Typography>
                    </CardContent>
            </Card>
        </BackSide>
    </Flippy>
    );
}

export default BuildingCard;