import { useState,useEffect } from 'react'
import moment from 'moment';
import {toast} from 'react-toastify';
import JsPDF from 'jspdf';
import './HomeReservation.css'


function HomeReservation() {

const [formData,setFormData] = useState({
    cityStart:'',
    cityEnd:'',
  })
const { cities } = require("list-of-moroccan-cities");
const [jwtToken , setJwtToken]=useState(localStorage.getItem('token'))
const [travels,setTravels] = useState([]) 
const [ScreenWidth,setScreenWidth] = useState(document.body.clientWidth)
const [messageNoTravels,setMessageNoTravels] = useState('')

// function that return size of the windows
var onresize = function() {
  setScreenWidth(document.body.clientWidth)
}
window.addEventListener("resize", onresize);

// handle inputes data and get values
const handleChange = (e)=>{
  setFormData((previousState)=>({
      ...previousState,
      [e.target.name] : e.target.value,
}))
    
}
// get current time using moment.js
let now	= moment();
let today = now.format('YYYY-MM-DD');


const searchTravel=async()=>{
  if (!formData.cityStart || !formData.cityEnd) {
    toast.warning(`veuillez remplir les champs obligatoires!`, {
      position: toast.POSITION.TOP_CENTER
  });
  }
  setTravels([])
  await fetch(`http://localhost:5000/api/travel/${formData.cityStart}/${formData.cityEnd}`,{
    method: "Get",
    headers: {
        "Authorization":"Bearer "+jwtToken+""
    },
  })
  .then(res => res.json())
  .then(data=> { 
    if (data.message ==="Travel not found") {
      setMessageNoTravels(data.message)
    }else{
      setMessageNoTravels("")
      data.travel.forEach(element => {
        console.log(element);
      setTravels(prevArray => [...prevArray, element])
    })
    }
}
  )
}
const Reserve_Travel = async(travel_id)=>{
  const id_user = localStorage.getItem('user_id')
  if (id_user) { 
    await fetch('  http://localhost:5000/api/ticket/confirmTicket',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({travel_id,id_user})
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.message ==="reserved seccesfully") {
        toast.success(`reserved seccesfully !`, {
          position: toast.POSITION.TOP_CENTER
      });
      generatePDF()
      }
      if (data.message ==="this travel is alrady full") {
        toast.error(`travel is full!`, {
          position: toast.POSITION.TOP_CENTER
      });
      }
    })
  }else{
    toast.info(`Please sign in to continue`, {
      position: toast.POSITION.TOP_CENTER
  });
  }
}
const generatePDF = () => {

  const report = new JsPDF('portrait','pt','a4');
  report.html(document.querySelector('#ticket')).then(() => {
      report.save('report.pdf');
  })
}
  return (
    <section className='Booking_container'>
      <div className="booking_form">
        <div className='options'>

        <div className='start_holder'>
            <label htmlFor="">Ville de depart</label>
            <select className="form-select" name='cityStart' aria-label="Default select example" onChange ={handleChange}>
              <option selected disabled >--choisir ville</option>
              {
                cities?
                cities.map((element,i)=> (
                  <option key={i} value={element.name} > {element.name} </option>
                )):null
              }
            </select>
          </div>

          <div className='end_holder'>
            <label htmlFor="">Ville d'arrive</label>
            <select className="form-select" name='cityEnd' aria-label="Default select example" onChange ={handleChange}>
            <option selected disabled >--choisir ville</option>
              {
                cities?
                cities.map((element,i)=> (
                  <option key={i} value={element.name} > {element.name} </option>
                )):null
              }
            </select>
          </div>

          <div className='time_holder'>
            <label htmlFor="date">Date depart</label>
            <input type="date" id='date' min={today}/>
          </div>
        </div>

        <div className="submit_search" onClick={()=>searchTravel()}>
          Recherche
        </div>
      </div>
      {
        messageNoTravels?
        <div style={{display:"flex", padding:"30px", alignItems:"center"}}>
            <h2>Aucun voyage trouvé</h2>
            <i className="fal fa-frown" style={{'font-size':"24px",marginLeft:'15px'}}></i>
        </div>:null
      }

        {
          travels.length != 0? <h2>Voyage disponible</h2> : null
        }
      <div className="travels_found_container">
        {travels?
              travels.map((element,i) => (
                <div className="travel_card" key={i}>
                  <div className='ticket_cut_left_side'></div>
                  <div className='ticket_cut_right_side'></div>
                  <div className="info">
                    <div>
                      <p> Ville de depart :  {element.cityStart}</p>
                      <p> Date de depart : {moment(element.dateStart).format('L')+" "+moment(element.dateStart).format('LT')}</p>
                    </div>
                    {ScreenWidth>768?
                      <i className="fal fa-arrow-from-left"></i>:<i className="fal fa-arrow-from-top"></i>
                    } 
                    <div>
                      <p> Ville d'arrive : {element.cityEnd}</p>
                      <p> Date d'arrive  : {moment(element.dateEnd).format('L')+" "+moment(element.dateEnd).format('LT')}</p>
                    </div>
                  </div>
                  <div className='price'>
                    Prix : {element.Price} DH
                  </div>
                  <div className='Bus'>
                    Bus : {element.Bus.name} 
                  </div>
                  <button className='submit_travel' onClick={()=>Reserve_Travel(element._id)}>Reserver</button>
              </div>
              
              )):null      
        }
            </div>
      <div className="travels_found_container" style={{display: 'none'}}>
        {travels?
              travels.map((element,i) => (
                <div className="travel_carsd" id='ticket' key={i} 
                style={{position: 'relative',
                    'border-radius':' 15px',
                    width: '65%',
                    'box-shadow': 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
                    background:'#988AB5',
                    padding: '20px',
                    margin: '10px',
                    display : "flex",
                    'flexDirection':"column",
                    alignItems:'center',
                    justifyContent:"center",
                    textAlign:'center'
                  }}>
                  <div style={{position: 'absolute',width: '25px',height: '25px',background:'white','border-radius': '50%',left: '-12px',top: '40%'}}></div>
                  <div style={{position: 'absolute',width: '25px',height: '25px',background:'white','border-radius': '50%',right: '-12px',top: '40%'}}></div>
                  <div className="info" 
                  style={{
                    width: '100%',
                    display: 'flex',
                    // 'flexDirection':"column",
                    alignItems:'center',
                    justifyContent:'space-around'
                    }}>
                    <div style={{padding: '10px',marginRight: '10px',border: '1px solid gray','border-radius': '10px'}}>
                      <p> Ville de depart :  {element.cityStart}</p>
                      <p> Date de depart : {moment(element.dateStart).format('L')+" "+moment(element.dateStart).format('LT')}</p>
                    </div>
                    <div style={{padding: '10px',marginLeft: '10px',border: '1px solid gray','border-radius': '10px'}}>
                      <p> Ville d'arrive : {element.cityEnd}</p>
                      <p> Date d'arrive  : {moment(element.dateEnd).format('L')+" "+moment(element.dateEnd).format('LT')}</p>
                    </div>
                  </div>
                  <div className='Bus' >
                    Bus : {element.Bus.name} 
                  </div>
                  <div className='price' style={{'font-size': '18px','font-weight': '700','margin-bottom': '10px'}}>
                    Prix : {element.Price} DH
                  </div>
              </div>
              
              )):null      
        }
        </div>


    
  </section>
  )
}

export default HomeReservation