import { useState } from "react";
import axios from "axios";

const InputForm = () =>{
    const [val,setVal] = useState({start:"",end:""});

    const submitForm = (event)=>{
        event.preventDefault();
        //Replace with actual API link in prod
        const apiURL = `http://localhost:4040/route/${val.start}/${val.end}`;

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
                <input type="text" value={val.start} onChange={(e)=>{setVal({...val,start:e.target.value})}} />
                <input type="text" value={val.end} onChange={(e)=>{setVal({...val,end:e.target.value})}} />
                <button type="submit" onClick={submitForm}>Submit</button>
            </form> 
        </div>
    );
}

export default InputForm;