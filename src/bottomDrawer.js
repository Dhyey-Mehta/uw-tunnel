import "./App.css";
import Button from '@mui/material/Button';

const BottomDrawer = () =>{
    return(
        <footer className="foot">
            <Button size="small">What is this?</Button>
            <span style={{width:10}}></span>
            <Button size="small">About Me</Button>
        </footer>
    );
}

export default BottomDrawer;