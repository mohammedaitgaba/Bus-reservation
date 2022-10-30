import {useState} from 'react'
import SideBar from "../Componnents/sideBar/sideBar"
import Travel from "../Componnents/travel/travel"
import Bus from "../Componnents/bus/bus"
function Dushboard() {
  const [componnent, setComponnent] = useState('');
  const [isTrue, setisTrue] = useState(false);

  const componnentSwitcher = name => {
    // 👇️ take parameter passed from Child component
    setComponnent(name)
    console.log("in dushboard", componnent);
  };
  return(
    <>
      <SideBar componnxentSwitcher={componnentSwitcher}/>
      <Travel/>
      <Bus />
    </>
   
  )

}

export default Dushboard