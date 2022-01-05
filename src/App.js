import InputForm from "./InputForm";
import bigLogo from "./BigLogo.png";
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () =>{
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  }); 


  return (
  <div className="body" theme={darkTheme}>
    <div className="centered">
      <img src={bigLogo} 
      width={433/2} 
      height={281/2} 
      alt="Warm Warriors" 
      className="centered-img" />
      <InputForm /> 
    </div>
  </div>
  );
}

export default App;