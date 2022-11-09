import './travel.css';
import {useState,useEffect} from 'react'
import {toast} from 'react-toastify';
import moment from 'moment';


import Popup from './Popup';
function Travel() {
    const [isOpen,setIsOpen] =useState(false)
    const [openAddTravelPopup, setOpenTravelPopup] = useState();
    const [getData, setGetData] = useState();
    const [jwtToken , setJwtToken]=useState(localStorage.getItem('token'))
    const [travels,setTravels] = useState([]) 
    // const [openUpdateTravelPopup, setopenUpdateTravelPopup] = useState(false);


    useEffect(()=>{ 
        getTravels()

    },[])

    const getTravels = async()=>{
        setTravels([])
        await fetch('http://localhost:5000/api/travel',{
            method: "Get",
            headers: {
                "Authorization":"Bearer "+jwtToken+""
            },
        })
        .then(res => res.json())
        .then(data=> data.travel.forEach(element => {
            
            setTravels(prevArray => [...prevArray, element])
        })
        )
    }

    const deleteTravel = (id)=>{
        fetch(`http://localhost:5000/api/travel/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res=>res.json())
        .then(out=>{
            if (out.message==="deleted") {
                toast.success(`Deleted succesfully !`, {
                    position: toast.POSITION.TOP_CENTER
                });
                getTravels()
            }
        })
    }
    
    return (
    <section className='travels_container'>
        <div className='new_travel'>
            <button onClick={()=>setOpenTravelPopup("openAdd")}>Ajoute voyage</button>
        </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Travle</th>
                <th scope="col">Depart</th>
                <th scope="col">Fin</th>
                <th scope="col">Date depart</th>
                <th scope="col">Date d'arrive</th>
                <th scope="col">Bus</th>
                <th scope="col">Prix</th>
                <th scope="col">options</th>
                </tr>
            </thead>
            <tbody>
            {
            travels?
            travels.map((element,i) => (
                <tr key={i}>
                    <td>{i+1} </td>
                    <td>{element.cityStart} </td>
                    <td>{element.cityEnd}</td>
                    <td>{moment(element.dateStart).format('L')+" "+moment(element.dateStart).format('LT')}</td>
                    <td>{moment(element.dateEnd).format('L')+" "+moment(element.dateEnd).format('LT')}</td>
                    <td>{element.Bus.name}</td>
                    <td>{element.Price} DH</td>
                    <td>
                        <i className="fal fa-edit" onClick={()=>setOpenTravelPopup(element._id)} ></i>
                        <i className="fal fa-trash" onClick={()=>deleteTravel(element._id)}></i>
                    </td>

                </tr> 
            )):null
            }
            </tbody>
        </table>
        {/* <button onClick={()=>setopenUpdateTravelPopup(true)}>dd</button> */}
        <Popup Open={openAddTravelPopup} Close={()=> setOpenTravelPopup(false)} getData ={()=>getTravels()} />

    </section>
  )
}

export default Travel