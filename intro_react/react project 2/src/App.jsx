import Usercard from "./Components/UserCard"
import ranilaxmibai from "./assets/ranilaxmibai.jpeg";
import  durgavti from "./assets/durgavti.jpeg";
import rudramadevi from "./assets/rudramadevi.png";



function App() {
  

  return (
    <>
   
     <Usercard name="Rani Laxmi Bai" desc="description1" image={ranilaxmibai}/>
     <Usercard name="Rani Durgavati" desc="description2" image={durgavti}/>
     <Usercard name="Rani Rudramadevi" desc="description3" image={rudramadevi} />
    </>
  )
}

export default App;
