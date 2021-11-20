import { useState } from "react";

const InputForm = ({text}) =>{
    const [val,setVal] = useState("");
    return(
        <div>
            <p>{text}</p>
            <input type="text" value={val} onChange={(e)=>{setVal(e.target.value);}} />
        </div>
    );
}

export default InputForm;