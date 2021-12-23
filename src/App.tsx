

import { BrowserRouter } from "react-router-dom";
import { CurriculumApplication } from "./components/CurriculumApplication";
import { UserContext } from "./UserContext";

const store = {
  theme: {
    dark: null,
    light: null,
  },
  colors: {

  },
  styleAnchorNone: {
    textDecoration: 'none',
    color: "white"
  }


}



function App() {


  return (
    <UserContext.Provider value={store}>
      <BrowserRouter>
        <CurriculumApplication />
      </BrowserRouter>
    </UserContext.Provider>


  );
}

export default App;
