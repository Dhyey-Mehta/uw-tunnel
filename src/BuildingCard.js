import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material';

const BuildingCard = ({buildingCode,subTitle}) =>{
    return(
        <div>
        <Card sx={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia 
                component="img"
                image = 'https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/uwaterloo.sidearmsports.com/images/2016/1/8/DSC_0011.JPG' 
                alt="PAC"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {buildingCode}
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

export default BuildingCard;