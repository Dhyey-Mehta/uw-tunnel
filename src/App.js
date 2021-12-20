import InputForm from "./InputForm";
import BuildingCard from "./BuildingCard";
import bigLogo from "./BigLogo.png";
import "./App.css";

const App = () =>{
  return (
  <div className="body">
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