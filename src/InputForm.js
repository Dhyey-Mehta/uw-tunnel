import { useState } from "react";

const InputForm = () =>{
    const [val,setVal] = useState({start:"",end:""});

    const submitForm = (event)=>{
        event.preventDefault();
        console.log(val.start + "  " + val.end);
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <input type="text" value={val.start} onChange={(e)=>{setVal({...val,start:e.target.value})}} />
                <input type="text" value={val.end} onChange={(e)=>{setVal({...val,end:e.target.value})}} />
                <button type="submit">Submit</button>
            </form> 
        </div>
    );
}

export default InputForm;