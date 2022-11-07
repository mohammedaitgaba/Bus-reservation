import {useState} from 'react'
import SideBar from "../Componnents/sideBar/sideBar"
import Travel from "../Componnents/travel/travel"
import Bus from "../Componnents/bus/bus"
import Reservation from '../Componnents/Reservation/Reservation'
function Dushboard() {
  const [componnent, setComponnent] = useState(localStorage.getItem('componnent'));
  const [isTrue, setisTrue] = useState(false);

  const componnentSwitcher = name => {
    // 👇️ take parameter passed from Child component
    localStorage.setItem('componnent',name)
    setComponnent(name)
    
  };
  return(
    <>
      <SideBar componnentSwitcher={componnentSwitcher}/>
      {
        componnent === "Travel" ? <Travel/> : componnent === "Bus" ? <Bus /> : <Reservation/>
      }    
    </>
   
  )

}

export default Dushboard