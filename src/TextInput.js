import TextField from '@mui/material/TextField';
import AutoComplete from '@mui/material/Autocomplete';

const TextInput = ({innerText,val,setVal,userIn,setUserIn,options}) => {
    return(
        <div>
            <AutoComplete 
            value={val}
            sx={{width:300}}
            onChange={(event,newVal)=>{setVal(newVal)}}
            inputValue={userIn}
            onInputChange={(event,newVal)=>{setUserIn(newVal)}}
            options={options}
            renderInput={(params) => <TextField {...params} label={innerText} />}
            />
        </div>
    )
}

export default TextInput;