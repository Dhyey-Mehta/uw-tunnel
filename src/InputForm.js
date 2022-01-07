import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextInput from "./TextInput";
import MakeCards from "./makeCards";
import {PushSpinner} from "react-spinners-kit";
import "./App.css";
import {IoMapSharp} from 'react-icons/io5';

const options = ["B1","B2","C2","DC","E3","E5","EIT","ESC","M3","MC","PAC","QNC","SLC"]

const InputForm = () =>{
    const [valStart,setValStart] = useState("");
    const [userInStart,setUserInStart] = useState(options[0]);
    const [valEnd,setValEnd] = useState("");
    const [userInEnd,setUserInEnd] = useState(options[0]);
    const [completed,setCompleted] = useState({stage:1,path:[]});

    const submitForm = (event)=>{
        //Make sure that the page does not refresh when submit form is clicked
        event.preventDefault();
        //Set Loading Screen
        setCompleted({...completed,stage:2});
        //Replace with actual API link in prod
        const apiURL = `http://localhost:4040/route/${valStart}/${valEnd}`;
        axios.get(apiURL).then(
            (res)=>{
                const pathFound = res.data.path;
                console.log(pathFound);
                setCompleted({stage:3, path:pathFound});
            }
        ).catch((err)=>{
            console.log(err);
            setCompleted({stage:4,path:[]});
        })
    }

    //Home Screen
    if (completed.stage===1){
        return(
            <div>
                <form onSubmit={submitForm}>
                    <TextInput innerText="From" 
                        val={valStart} 
                        setVal={setValStart} 
                        userIn={userInStart} 
                        setUserIn={setUserInStart} 
                        options={options} 
                        className="text-box" />
                    <TextInput 
                        innerText="To" 
                        val={valEnd} 
                        setVal={setValEnd} 
                        userIn={userInEnd} 
                        setUserIn={setUserInEnd} 
                        options={options} 
                        className="text-box"/>
                    <Button 
                        sx={{marginTop:5}} 
                        size="medium" 
                        type="submit" 
                        variant="contained" 
                        onClick={submitForm} 
                        className="centered"> 
                    <IoMapSharp style={{marginRight:4}} /> Find Path </Button>
                </form> 
            </div>
        );
    }

    //Loading
    else if (completed.stage===2){
        return(<PushSpinner size={50} color="#D65A31" style={{marginLeft:50}}/>);
    }
    //Done
    else if (completed.stage===3){
        return (<MakeCards pathLst={completed.path} />);
    }
    else if (completed.stage===4){
        return(<h2 style={{textAlign:"center"}}>No path found!</h2>)
    }
}

export default InputForm;