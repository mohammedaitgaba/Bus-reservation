import {useState ,useEffect}  from "react";
import {toast} from 'react-toastify';
import moment from 'moment';
import '../Sign_in/sign_in'
const Popup =({Open,Close,getData}) => {
    const [Buses,setBuses] = useState([])
    const [travelinfo,setTravelinfo] = useState([])
    const [jwtToken , setJwtToken]=useState(localStorage.getItem('token'))
    const [formData,setFormData] = useState({
        // id:"",
        cityStart:'',
        cityEnd:'',
        dateStart:"",
        dateEnd:"",
        Bus:'',
        Price:'',
    })
    const { cities } = require("list-of-moroccan-cities");
    const {cityStart,cityEnd,dateStart,dateEnd,Bus,Price}=formData

    let now	= moment();
    let today = now.format('YYYY-MM-DD');

    useEffect(()=>{ 
        getBuses()
        if (Open) {  
            getTravelById(Open)
        }
    },[Open])

    const getBuses = async()=>{
        setBuses([])
        await fetch('http://localhost:5000/api/bus',{
            method: "Get",
            headers: {
                "Authorization":"Bearer "+jwtToken+""
            },
        })
        .then(res => res.json())
        // .then(out=>console.log(out.bus))
        .then(data=> data.bus.forEach(element => {
            setBuses(prevArray => [...prevArray, element])
        })
        )
    }
    const getTravelById = async (id)=>{
        await fetch('http://localhost:5000/api/travel/findTravel',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer "+jwtToken+""
            },
            body: JSON.stringify({id})
        }).then(res =>res.json())
        .then(data=>{
            // setTravelinfo(data.travel)
            setFormData({
                // id: data.travel._id,
                cityStart : data.travel.cityStart,
                cityEnd:data.travel.cityEnd,
                dateStart : data.travel.dateStart,
                Bus : data.travel.Bus,
                Price : data.travel.Price
            })
        })
    }

    
    const handleChange = (e)=>{
        setFormData((previousState)=>({
            ...previousState,
            [e.target.name] : e.target.value,
        }))
    }
    const AddTravel =()=>{
        fetch('http://localhost:5000/api/travel/all',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer "+jwtToken+""
            },
            body: JSON.stringify(formData)
        })
        .then(res =>res.json())
        .then(data=>{
            if (data.message === "created") {
                Close()
                getData()
                toast.success(`Added succesfully !`, {
                    position: toast.POSITION.TOP_CENTER
                });
            }

        })
    }
    const UpdateTravel=()=>{
        const id = Open
        fetch(`http://localhost:5000/api/travel/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer "+jwtToken+""

            },
            body: JSON.stringify(formData)
        }).then(res=>res.json())
        .then(data=>{
            if (data.updatedtravel) {
                Close()
                getData()
                toast.success(`Updated succesfully !`, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }

    if (!Open) return null
    if (Open==="openAdd") {
        return(
            <section className="Sign_in_holder">
            <form className="sign_in_form Register_form">
                <div className="title">
                    Ajoute voyage
                </div>
                <div className='Close'>  
                    <i className="fal fa-times-circle"  onClick={Close}></i>
                </div>
                <div className="form_body Registration">
                    <div>
                        <label htmlFor="">Ville depart </label>
                        <select className="form-select" name='cityStart' value={cityStart}  aria-label="Default select example" onChange ={handleChange}>
                        <option selected disabled >--choisir ville</option>
                        {
                            cities?
                            cities.map((element,i)=> (
                            <option key={i} value={element.name} > {element.name} </option>
                            )):null
                        }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Ville d'arrive </label>
                        <select className="form-select" name="cityEnd" value={cityEnd}  aria-label="Default select example" onChange ={handleChange}>
                        <option selected disabled >--choisir ville</option>
                        {
                            cities?
                            cities.map((element,i)=> (
                            <option key={i} value={element.name} > {element.name} </option>
                            )):null
                        }
                        </select>
                    </div>
                    {/* <input type="text" placeholder="vill d'arrive" name="cityEnd" value={cityEnd} onChange ={handleChange}/> */}
                    <div>
                        <label htmlFor="">Date depart </label>
                        <input type="datetime-local"  name="dateStart" placeholder="ddd" min={today} value={dateStart} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Date d'arrive </label>
                        <input type="datetime-local"  name="dateEnd" value={dateEnd} min={formData.dateStart} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Bus  </label>
                        <select onChange={handleChange} name="Bus" value={Bus} >
                        {
                            Buses?
                            Buses.map((bus ,i)=>(
                                <option key={i}  value={bus._id} >{bus.name}</option>
                                
                            )):null
                        }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Prix </label>
                        <input type="number" placeholder="Prix" name="Price" value={Price} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form_submit">
                    <button type="button" onClick={AddTravel}> Ajoute</button>
                </div>

            </form>
        </section>
        )
    }else{

        return(
            <section className="Sign_in_holder">
                <form className="sign_in_form Register_form">
                <div className="title">
                    Modifier voyage
                </div>
                <div className='Close'>  
                    <i className="fal fa-times-circle"  onClick={Close}></i>
                </div>
                <div className="form_body Registration">
                    <div>
                        <label htmlFor="">Ville depart </label>
                        {/* <input type="text" placeholder="ville depart" name="cityStart" value={cityStart} onChange={handleChange}/> */}
                        <select className="form-select" name='cityStart' value={cityStart}  aria-label="Default select example" onChange ={handleChange}>
                        <option selected disabled >--choisir ville</option>
                        {
                            cities?
                            cities.map((element,i)=> (
                            <option key={i} value={element.name} > {element.name} </option>
                            )):null
                        }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Ville d'arrive </label>
                        {/* <input type="text" placeholder="ville depart" name="cityStart" value={cityStart} onChange={handleChange}/> */}
                        <select className="form-select" name="cityEnd" value={cityEnd}  aria-label="Default select example" onChange ={handleChange}>
                        <option selected disabled >--choisir ville</option>
                        {
                            cities?
                            cities.map((element,i)=> (
                            <option key={i} value={element.name} > {element.name} </option>
                            )):null
                        }
                        </select>
                    </div>
                    {/* <input type="text" placeholder="vill d'arrive" name="cityEnd" value={cityEnd} onChange ={handleChange}/> */}
                    <div>
                        <label htmlFor="">Date depart </label>
                        <input type="datetime-local"  name="dateStart" placeholder="ddd" value={dateStart} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Date d'arrive </label>
                        <input type="datetime-local"  name="dateEnd" value={dateEnd} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Bus  </label>
                        <select onChange={handleChange} name="Bus" value={Bus} >
                        {
                            Buses?
                            Buses.map((bus ,i)=>(
                                <option key={i}  value={bus._id} >{bus.name}</option>
                                
                            )):null
                        }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Prix </label>
                        <input type="number" placeholder="Prix" name="Price" value={Price} onChange={handleChange}/>
                    </div>
                </div>
                {/* <div className="form_body Registration">
                    <input type="text" placeholder="ville depart" name="cityStart" value={cityStart} onChange={handleChange}/>
                    <input type="text" placeholder="vill d'arrive" name="cityEnd" value={cityEnd} onChange ={handleChange}/>
                    <input type="datetime-local" name="dateStart" value={dateStart} onChange={handleChange}/>
                    <select onChange={handleChange} name="Bus" value={Bus.name}>
                    {
                        Buses?
                        Buses.map((bus ,i)=>(
                            <option key={i}  value={bus._id} >{bus.name}</option>
                            // <option   value={Bus.id}>{Bus.name}</option>
                        )):null
                    }
                    </select>
                    <input type="number" placeholder="Prix" name="Price" value={Price} onChange={handleChange}/>
                </div> */}
                <div className="form_submit">
                    <button type="button" onClick={()=> UpdateTravel()}> Update Travel</button>
                </div>

            </form>
            </section>
        )
    }
}

export default Popup
