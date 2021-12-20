import { HomeScreen } from '../Screens/HomeScreen';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ProgrmasScreen } from '../Screens/ProgrmasScreen';
import { SobreMiScreen } from '../Screens/SobreMiScreen';



export const MainRoute = () => {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route  path="/programas" element={<ProgrmasScreen />} />
      <Route  path="/aboutme" element={<SobreMiScreen />} />
      <Route  path="*" element={<HomeScreen />} /> 

    </Routes>

    
  </BrowserRouter>
  );
}