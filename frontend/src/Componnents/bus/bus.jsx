import './bus.css'
import {useState,useEffect} from 'react'
import {toast} from 'react-toastify';


function Bus() {
  const [jwtToken , setJwtToken]=useState(localStorage.getItem('token'))
  const [Bus,setBus] = useState([]) 
  const [formData,setFormData] = useState({
    name:'',
    capacity:'',
})
  useEffect(()=>{ 
    getBus()

},[])

const getBus = async()=>{
    setBus([])
    await fetch('http://localhost:5000/api/bus',{
        method: "Get",
        headers: {
            "Authorization":"Bearer "+jwtToken+""
        },
    })
    .then(res => res.json())
    .then(data=> data.bus.forEach(element => {
        
        setBus(prevArray => [...prevArray, element])
    })
    )
}

const handleChange = (e)=>{
  setFormData((previousState)=>({
      ...previousState,
      [e.target.name] : e.target.value,
  }))
}
const {bus_name,capacity}=formData
const AddBus =()=>{
  fetch('http://localhost:5000/api/bus',{
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  })
  .then(res =>res.json())
  .then(data=>{
      if (data.message === "created") {
          toast.success(`Added succesfully !`, {
              position: toast.POSITION.TOP_CENTER
          });
      }

  })
}
  return (
    <div className="bus_container">
      <div className="add_bus">
        <form action="">
          <input type="text" placeholder='Bus nom' name='name' value={bus_name} onChange={handleChange} />
          <input type="number" placeholder='capacite' name='capacity' min={0} value={capacity} onChange={handleChange}/>
          <button onClick={()=> AddBus()}>Ajoute bus</button> 
        </form>
      </div>
      <section className='All_bus'>
      {Bus?
            Bus.map((element,i) => (
              <div className="bus_card" key={i}>
              <img src={`${process.env.PUBLIC_URL}/images/tobis.jpg`} alt="" />
              <div className="info">
                <p> {element.name} </p>
                <p> {element.capacity} Seat </p>
              </div>
            </div>  
            )):null     
      }
      </section>
    </div>
  )
}

export default Bus