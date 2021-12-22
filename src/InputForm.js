import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextInput from "./TextInput";
import makeCards from "./makeCards"
import "./App.css";

const options = ["B1","B2","C2","DC","E3","E5","EIT","ESC","M3","MC","PAC","QNC","SLC"]

const InputForm = () =>{
    const [valStart,setValStart] = useState("");
    const [userInStart,setUserInStart] = useState(options[0]);
    const [valEnd,setValEnd] = useState("");
    const [userInEnd,setUserInEnd] = useState(options[0]);

    const submitForm = (event)=>{
        //Make sure that the page does not refresh when submit form is clicked
        event.preventDefault();
        //Replace with actual API link in prod
        const apiURL = `http://localhost:4040/route/${valStart}/${valEnd}`;

        axios.get(apiURL).then(
            (res)=>{
                console.log(res.data.path);
            }
        ).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <TextInput innerText="From" val={valStart} setVal={setValStart} userIn={userInStart} setUserIn={setUserInStart} options={options} className="text-box" />
                <TextInput innerText="To" val={valEnd} setVal={setValEnd} userIn={userInEnd} setUserIn={setUserInEnd} options={options} className="text-box"/>
                <Button sx={{marginTop:2}} size="medium" type="submit" varient="outlined" colour="primary" onClick={submitForm} className="centered" > Submit </Button>
            </form> 
        </div>
    );
}

export default InputForm;