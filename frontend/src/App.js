import { BrowserRouter as Router,Routes , Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./Componnents/Navbar/Navbar"
import Footer from "./Componnents/Footer/Footer";
import  Home  from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
