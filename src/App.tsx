
import { MainRoute } from "./router/MainRoute";
import "./styles/global.css";

import { Navbar } from "./components/Navbar";
import { SocialMedia } from "./SocialMedia";
import { useEffect, useState } from "react";





function App() {



  const [width, setWidth] = useState(window.innerWidth);
  




  useEffect(() => {
    // console.log("Resolucion Cambio a "+ width );
    window.addEventListener("resize", ()=>{
      // console.log("Cambio " +  window.innerWidth)
      setWidth(window.innerWidth);
    });
  }, [width]);




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
          <div>
            <SocialMedia />
          </div>
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
