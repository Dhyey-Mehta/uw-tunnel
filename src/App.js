import InputForm from "./InputForm";
import TextInput from './TextInput'
import BuildingCard from "./BuildingCard"
import bigLogo from "./BigLogo.png";
import "./App.css";

const App = () =>{
  return (
  <div className="body">
    <div style={{textAlign:"center"}} >
      <img src={bigLogo} alt="Warm Warriors" />
    </div>
    <InputForm />
  </div>
  );
}

export default App;