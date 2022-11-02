import './travel.css';
import {useState,useEffect} from 'react'
import {toast} from 'react-toastify';

import Popup from './Popup';
function Travel() {
    const [isOpen,setIsOpen] =useState(false)
    const [openAddTravelPopup, setOpenTravelPopup] = useState();
    const [jwtToken , setJwtToken]=useState(localStorage.getItem('token'))
    // const [openUpdateTravelPopup, setopenUpdateTravelPopup] = useState(false);

    const [travels,setTravels] = useState([]) 

    useEffect(()=>{ 
        getTravels()
        console.log(openAddTravelPopup);
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
                <th scope="col">Travle id</th>
                <th scope="col">Depart</th>
                <th scope="col">Fin</th>
                <th scope="col">Date depart</th>
                <th scope="col">Bus</th>
                <th scope="col">Prix</th>
                <th scope="col">options</th>
                </tr>
            </thead>
            <tbody>
            {
            travels?
            travels.map((element,i) => (
                <tr>
                    <td>{element._id} </td>
                    <td>{element.cityStart} </td>
                    <td>{element.cityEnd}</td>
                    <td>{element.dateStart}</td>
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
        <Popup Open={openAddTravelPopup} Close={()=> setOpenTravelPopup(false)} />

    </section>
  )
}

export default Travel