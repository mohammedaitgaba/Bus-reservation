import './sideBar.css'
import {useState} from 'react'
function SideBar({componnentSwitcher}) {

  const [isActive,setisActive] = useState(localStorage.getItem('componnent'))
  // const componnentSwitcher =  (componnent)=>{
  //   setisActive(componnent)
  // }

const active = (current)=>{
  setisActive(current)
}  
  return (
    <section className='sideContainer'>
      <div className='links_container'>

        <div className={isActive==="Travel"?'sidelinks sidelinks_active':'sidelinks'} onClick={() => { componnentSwitcher('Travel'); active('Travel')}}>
          <i className="fal fa-map-marked-alt"></i>
          <p>Voyage</p>
        </div>

        <div className={isActive==="Reservation"?'sidelinks sidelinks_active':'sidelinks'} onClick={()=> {componnentSwitcher('Reservation');active('Reservation')} } >
          <i className="fal fa-pen"></i>
          <p>Reservation</p>
        </div>

        <div className={isActive==="Bus"?'sidelinks sidelinks_active':'sidelinks'} onClick={()=> {componnentSwitcher('Bus');active('Bus')}}>
          <i className="fal fa-bus"></i>
          <p>Buses</p>
        </div>
      </div>
    </section>
  )
}

export default SideBar