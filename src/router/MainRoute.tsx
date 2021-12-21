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
import { ReferentesScreen } from '../Screens/ReferentesScreen';
import { PortfoliScreen } from '../Screens/PortfoliScreen';
import { BlogScreen } from '../Screens/BlogScreen';
import { CertificacionesScreen } from '../Screens/CertificacionesScreen';




export const MainRoute = () => {

  const {width} = useResponsiveWidth()


  
    // Portfolio
    // Referentes
    // Blog
    // Certificaciones 
  
  return (
   <div>
      {(1024>width) && <SocialMedia/>}
      <BrowserRouter>
        <Routes>
    
          {/* falta Experiencia */}

          <Route  path="/blog" element={<BlogScreen />} />
          <Route  path="/certificaciones" element={<CertificacionesScreen />} />
          <Route  path="/programas" element={<ProgrmasScreen />} /> 
          <Route  path="/portfolio" element={<PortfoliScreen />} />
          {/* Referentes Listo */}
          <Route  path="/referentes" element={<ReferentesScreen />} />
          <Route  path="/sobremi" element={<SobreMiScreen />} />
          <Route  path="*" element={<HomeScreen />} /> 
        </Routes>
      </BrowserRouter>
     
   </div>
  );
}