import {useState ,useEffect}  from "react";
import {toast} from 'react-toastify';
import '../Sign_in/sign_in'
const Popup =({Open,Close}) => {
    const [Buses,setBuses] = useState([])
    const [travelinfo,setTravelinfo] = useState([])
    const [formData,setFormData] = useState({
        id:"",
        cityStart:'',
        cityEnd:'',
        dateStart:"",
        Bus:'',
        Price:'',
    })
    const {cityStart,cityEnd,dateStart,Bus,Price}=formData
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
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        }).then(res =>res.json())
        .then(data=>{
            // setTravelinfo(data.travel)
            setFormData({
                id: data.travel._id,
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
        console.log(formData);
        fetch('http://localhost:5000/api/travel',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res =>res.json())
        .then(data=>{
            if (data.message === "created") {
                Close()
            }
        })
    }
    const UpdateTravel=()=>{
        const id = formData.id
        fetch(`http://localhost:5000/api/travel/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res=>res.json())
        .then(data=>{
            if (data.message === "updated") {
                Close()
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
                    <input type="text" placeholder="ville depart" name="cityStart" value={cityStart} onChange={handleChange}/>
                    <input type="text" placeholder="vill d'arrive" name="cityEnd" value={cityEnd} onChange ={handleChange}/>
                    <input type="datetime-local"  name="dateStart" value={dateStart} onChange={handleChange}/>
                    <select onChange={handleChange} name="Bus" value={Bus} >
                    {
                        Buses?
                        Buses.map((bus ,i)=>(
                            <option key={i}  value={bus._id} >{bus.name}</option>
                            
                        )):null
                    }
                    </select>
                    <input type="number" placeholder="Prix" name="Price" value={Price} onChange={handleChange}/>
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
                </div>
                <div className="form_submit">
                    <button type="button" onClick={()=> UpdateTravel()}> Update Travel</button>
                </div>

            </form>
            </section>
        )
    }
}

export default Popup
