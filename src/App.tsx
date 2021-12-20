

import { CurriculumApplication } from "./components/CurriculumApplication";
import { UserContext } from "./UserContext";

const store = {
  theme:{
    dark: null,
    light: null,
  },
  colors: {
    
  },
}



function App() {


  return ( 
    <UserContext.Provider value={store}>
      <CurriculumApplication />
    </UserContext.Provider>
    
  
    );
}

export default App;
