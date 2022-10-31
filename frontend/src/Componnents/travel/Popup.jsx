import {useState ,useEffect}  from "react";
import {toast} from 'react-toastify';
import '../Sign_in/sign_in'
const Popup =({Open,Close,Update}) => {
    const [isAdd,setAdd] = useState(false)
    const [Buses,setBuses] = useState([])

    useEffect(()=>{ 
        getBuses()
    },[])

    const getBuses = async()=>{
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

    const [formData,setFormData] = useState({
        cityStart:'',
        cityEnd:'',
        dateStart:"",
        Bus:'',
        Price:'',
    })
    const {cityStart,cityEnd,dateStart,Bus,Price}=formData
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
        }).then(res =>res.json())
        .then(data=>{
            if (data.message === "created") {
                Close()
            }
        })
    }

    if (!Open) return null
    if (!Update) {
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
                    <input type="date" name="dateStart" value={dateStart} onChange={handleChange}/>
                    <select onChange={handleChange} name="Bus" >
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

            </section>
        )
    }
}

export default Popup
