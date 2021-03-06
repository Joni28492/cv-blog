import { useResponsiveWidth } from '../hooks/useResponsiveWidth';
import { SocialMedia } from '../SocialMedia';

import { MainRoute } from '../router/MainRoute';

import "../styles/global.css";

export const CurriculumApplication = () => {


  const { width } = useResponsiveWidth();

  return (
    <div className="App bg-dark  text-light" style={{
      display: 'flex',
      flexDirection: 'row'
    }}>


      {(width > 1024) &&
        <div className="img-large text-center container sticky-left" >

          <div>
            <h1>Joni Fernández</h1>
            <hr />
          </div>
          <SocialMedia />
        </div>}

      <div className="content-main overflow-scroll" style={{
        width: (width > 1024) ? '80vw' : '100vw',
        height: (width > 1024) ? '100vh' : '100vh',

      }}>


        <MainRoute />



      </div>
    </div>
  )
}
