import { BrowserRouter as Router,Routes , Route} from "react-router-dom";
import Navbar from "./Componnents/Navbar/Navbar"
import  Home  from "./Pages/Home/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
