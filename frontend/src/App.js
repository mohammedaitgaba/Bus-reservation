import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./Componnents/Navbar/Navbar"
import Footer from "./Componnents/Footer/Footer";
import Home from "./Pages/Home";
import Dushboard from "./Pages/Dushboard";
import ContactUs from "./Pages/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AuthContext from "./contexts/AuthContext";
function App() {

  return (
    <>
    <Router>
    {/* <AuthContext> */}
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={[<Home/>, <Footer/>]} />
          <Route path='/ContactUs' element={[<ContactUs/>, <Footer/>]}/>
          <Route path='/Dushboard' element={<Dushboard/>}/>
        </Routes>
      </div>
    {/* </AuthContext> */}
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
