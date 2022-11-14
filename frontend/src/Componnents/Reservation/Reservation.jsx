import {useState,useEffect} from 'react'
import moment from 'moment';
import "./Reservation.css";

function Reservation() {
  const [Ticket,setTicket] = useState([]) 
  useEffect(()=>{ 
    getTicket()

},[])

const getTicket = async()=>{
    setTicket([])
    await fetch('http://localhost:5000/api/ticket',{
        method: "Get",
    })
    .then(res => res.json())
    .then(data=> data.ticket.forEach(element => {
        setTicket(prevArray => [...prevArray, element])
    })
    )
}

  return (
    <div className='Reservation_container' style={{padding:'30px',overflow:'auto'}}>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Travle</th>
                <th scope="col">Client</th>
                <th scope="col">Depart</th>
                <th scope="col">Fin</th>
                <th scope="col">Date depart</th>
                <th scope="col">Date d'arrive</th>
                <th scope="col">Bus</th>
                <th scope="col">Prix</th>
                </tr>
            </thead>
            <tbody>
            {
            Ticket?
            Ticket.map((element,i) => (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{element.user.Fname} {element.user.Lname}</td>
                    <td>{element.travel.cityStart} </td>
                    <td>{element.travel.cityEnd}</td>
                    <td>{moment(element.travel.dateStart).format('L')+" "+moment(element.travel.dateStart).format('LT')}</td>
                    <td>{moment(element.travel.dateEnd).format('L')+" "+moment(element.travel.dateEnd).format('LT')}</td>
                    <td>{element.travel.Bus.name}</td>
                    <td>{element.travel.Price} DH</td>

                </tr> 
            )):null
            }
            </tbody>
        </table>
    </div>
  )
}

export default Reservation