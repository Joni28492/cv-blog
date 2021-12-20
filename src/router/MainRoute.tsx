import { HomeScreen } from '../Screens/HomeScreen';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ProgrmasScreen } from '../Screens/ProgrmasScreen';
import { SobreMiScreen } from '../Screens/SobreMiScreen';
import { SocialMedia } from '../SocialMedia';
import { useResponsiveWidth } from '../hooks/useResponsiveWidth';



export const MainRoute = () => {

  const {width} = useResponsiveWidth()
  
  return (
   <div>
      {
        (1024>width) && <SocialMedia/>
      }
      <BrowserRouter>

        <Routes>
        <Route  path="/programas" element={<ProgrmasScreen />} />
        <Route  path="/aboutme" element={<SobreMiScreen />} />
        <Route  path="*" element={<HomeScreen />} /> 

        </Routes>


      </BrowserRouter>
     
   </div>
  );
}