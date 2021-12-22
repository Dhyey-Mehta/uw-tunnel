import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material';

const GeneralCard = ({title,subTitle,imgLink}) =>{
    return(
        <div>
        <Card sx={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia 
                component="img"
                image = {imgLink}
                alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {subTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    )
}

const BuildingCard = ({buildingCode,floor,cardinality,dest,img}) =>{
    let subText = `Go to floor ${floor} and take the ${cardinality} bridge to ${dest}`;
    if (floor==-1){
        subText = `Head ${cardinality} to ${dest}`;
    }
    return(
        <GeneralCard title={buildingCode} subTitle={subText} imgLink={img}/>
    );
}

export default BuildingCard;