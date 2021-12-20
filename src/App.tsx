
import { MainRoute } from "./router/MainRoute";
import "./styles/global.css";

import { Navbar } from "./components/Navbar";
import { SocialMedia } from "./SocialMedia";
import { useResponsiveWidth } from './hooks/useResponsiveWidth';





function App() {


  const {width} =  useResponsiveWidth();


  return (
    <div className="App bg-dark  text-light" style={{
      display:'flex',
      flexDirection:'row'
    }}>

     
      {(width>1024)&&
        <div className="img-large text-center container " >
       
          <div>
            <h1>Joni Fernández</h1>
            <hr />
          </div>
            <SocialMedia />
      </div>}

     <div className="content-main" style={{
       width: (width>1024) ? '80vw' : '100vw',
       height: (width>1024) ? '100vh': '100vh',
       
     }}>
          <Navbar />
          <MainRoute />
        
     </div>
    
 

  
  
   
    </div>
  );
}

export default App;
