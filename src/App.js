import InputForm from "./InputForm";
import bigLogo from "./BigLogo.png";
import "./App.css";
import {createTheme,ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

const App = () =>{
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  }); 

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="body">
      <div className="centered">
        <img src={bigLogo} 
        width={433/2} 
        height={281/2} 
        alt="Warm Warriors" 
        className="centered-img" />
        <InputForm /> 
      </div>
      <footer className="foot">Test</footer>
    </div>
  </ThemeProvider>
  );
}

export default App;