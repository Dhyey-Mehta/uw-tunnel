import InputForm from "./InputForm";
import bigLogo from "./BigLogo.png";
import BottomDrawer from "./bottomDrawer"
import "./App.css";
import {createTheme,ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

const App = () =>{
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background:{
        default:'#222831',
      },
      primary:{
        main:'#D65A31',
        dark:'#D3D3D3',
      },
    },
  }); 

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="body">
      <div className="centered">
        <img src={bigLogo} 
        height={250*0.7}
        width={428*0.7}
        alt="Warm Warriors" 
        className="centered-img" />
        <InputForm /> 
      </div>
      <BottomDrawer />
    </div>
  </ThemeProvider>
  );
}

export default App;