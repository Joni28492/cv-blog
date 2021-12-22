import { HomeScreen } from '../Screens/HomeScreen';

import {
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
import { ExperienciaScreen } from '../Screens/ExperienciaScreen';
import { FormacionScreen } from '../Screens/FormacionScreen';




export const MainRoute = () => {

  const { width } = useResponsiveWidth()



  return (
    <div>
      {(1024 > width) && <SocialMedia />}

      <Routes>

        {/* Programas Listo */}
        {/* Referentes Listo */}
        {/* Sobremi Listo */}
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/certificaciones" element={<CertificacionesScreen />} />
        <Route path="/experiencia" element={<ExperienciaScreen />} />
        <Route path="/formacion" element={<FormacionScreen />} />
        <Route path="/programas" element={<ProgrmasScreen />} />
        <Route path="/portfolio" element={<PortfoliScreen />} />
        <Route path="/referentes" element={<ReferentesScreen />} />
        <Route path="/sobremi" element={<SobreMiScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>


    </div>
  );
}