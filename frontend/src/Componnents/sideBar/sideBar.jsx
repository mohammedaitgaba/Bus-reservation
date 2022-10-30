import './sideBar.css'
import {useState} from 'react'
function SideBar({componnentSwitcher}) {

  const [isActive,setisActive] = useState('')
  // const componnentSwitcher =  (componnent)=>{
  //   setisActive(componnent)
  // }
  
  return (
    <section className='sideContainer'>
      <div className='links_container'>

        <div className="sidelinks" onClick={()=>componnentSwitcher('Travel')}>
          <i className="fal fa-map-marked-alt"></i>
          <p>Voyage</p>
        </div>

        <div className="sidelinks" onClick={()=>componnentSwitcher('Reservation')} >
          <i className="fal fa-pen"></i>
          <p>Reservation</p>
        </div>

        <div className="sidelinks" onClick={()=>componnentSwitcher('Bus')}>
          <i className="fal fa-bus"></i>
          <p>Buses</p>
        </div>
      </div>
    </section>
  )
}

export default SideBar