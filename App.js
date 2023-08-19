import "./App.css";
import Homepage from "./components/Homepage";
import {Routes,Route} from 'react-router-dom';
import Photogallery from "./components/Photogallery";
import Generalinfo from "./components/Generalinfo";
import Knowyourstate from "./components/Knowyourstate";
import Organisational from "./components/Organisational";
import Public from "./components/Public";
import Registeration_fir from "./components/Registeration_fir";
import View_fir from "./components/View_fir";
import PoliceSchool from "./components/PoliceSchool";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/photo-gallery" element={<Photogallery/>}/> 
      <Route path="/general-info" element={<Generalinfo/>} /> 
      <Route path="/know-your-state" element={<Knowyourstate/>}/>
      <Route path="/organisational-setup" element={<Organisational/>}/>
      <Route path="/police-school" element={<PoliceSchool/>}/>
      <Route path="/public" element={<Public/>}/>
      <Route path="/register_fir" element={<Registeration_fir/>}/>
      <Route path="/view_fir" element={<View_fir/>}/>
    </Routes>
      
    </>
  );
}

export default App;
