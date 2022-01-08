import "./App.css";
import Button from '@mui/material/Button';

const BottomDrawer = () =>{
    return(
        <footer className="foot">
            <Button size="small" target="_blank" href="https://github.com/Dhyey-Mehta/uw-tunnel">What is this?</Button>
            <span style={{width:10}}></span>
            <Button size="small" target="_blank" href="https://www.linkedin.com/in/dhyey-mehta-1377901a7/">About Me</Button>
        </footer>
    );
}

export default BottomDrawer;