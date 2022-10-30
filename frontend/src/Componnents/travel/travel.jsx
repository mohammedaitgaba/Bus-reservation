import './travel.css';
import {useState,useEffect} from 'react'
function Travel() {

    const [travels,setTravels] = useState([])    

    
    useEffect(()=>{ 
        getTravels()
    },[])
    const getTravels = async()=>{
        await fetch('http://localhost:5000/api/travel',{
            method: "Get",
        })
        .then(res => res.json()).then(data=> data.travel.forEach(element => {
            
            setTravels(prevArray => [...prevArray, element])
            // setmed(prevArray => [...prevArray, element])
        })
        // console.log(data)
        )
    }

    function updateTravel(id){
        console.log(id);
    }
    return (
    <section>
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
            travels.map(element => (
                <tr>
                    <td>{element._id} </td>
                    <td>{element.cityStart} </td>
                    <td>{element.cityStart}</td>
                    <td>{element.cityStart}</td>
                    <td>{element.cityStart}</td>
                    <td>{element.cityStart}</td>
                    <td>
                        <i className="fal fa-edit" onClick={()=>updateTravel(element._id)}></i>
                        <i className="fal fa-trash"></i>
                    </td>

                </tr> 
            )):null
            }
            </tbody>
        </table>
    </section>
  )
}

export default Travel