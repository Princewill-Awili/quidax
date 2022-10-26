

import Topbar from "./components/Topbar/Topbar";
import Cart from "./components/Cart/Cart";
import Content from "./components/Content/Content";
import {BrowserRouter as Router} from 'react-router-dom'


function App() {

  return (
    <Router>
      <div className="App">
        <Topbar/>
        <Cart/>
        <Content/>
      </div>
    </Router>
    
  );
}

export default App;
