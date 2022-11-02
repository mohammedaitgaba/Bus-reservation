import {useState ,useEffect}  from "react";
import {toast} from 'react-toastify';
// import {useLocation, useNavigate} from "react-router-dom";

import './sign_in.css'

const Sign_in = ({Open,Close})=>{
    const [IsRegister,setRegister] = useState(false)
    const [error_message,setError_message] = useState('')
    const ToRegister =()=>{
        setRegister(true)
    }
    const ToSign_in=()=>{ 
        setRegister(false)
    }
    const [formData,setFormData] = useState({
        Fname:'',
        Lname:'',
        Phone:"",
        Email:'',
        Password:'',
        PasswordConfirmation:''
    })
    const {Fname,Lname,Phone,Email,Password,PasswordConfirmation}=formData
    const handleChange = (e)=>{
        setFormData((previousState)=>({
            ...previousState,
            [e.target.name] : e.target.value,
        }))
    }

    const Sign_up =()=>{
        fetch('http://localhost:5000/api/users/register',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
        .then(data =>{
            console.log(data.message);
            if (data.message ==="succesfully created") {
                setFormData({
                    Fname:'',
                    Lname:'',
                    Phone:"",
                    Email:'',
                    Password:'',
                    PasswordConfirmation:''
                })
                toast.success('succesfully Registred !', {
                    position: toast.POSITION.TOP_CENTER
                });
                localStorage.setItem('user_id',data.id)
                localStorage.setItem('token',data.token)
            }
            else if (data.message ==="Already existed") {
                toast.error('User Already existed !', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            else{
                toast.error('Something went wrong Please verify your data!', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }
    const Login = ()=>{
        if (formData.Email ==="admin@gmail.com") {
            fetch('http://localhost:5000/api/admin/login',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => {
                if (data.message === "welcome") {
                    localStorage.setItem('Admin_id',data.id)
                    localStorage.setItem('token',data.token)
                    toast.success(`Welcome back ${data.firstname +" "+ data.lastname} !`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                else{
                    toast.error('Invalid info!', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
        }else{

            fetch('http://localhost:5000/api/users/login',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => {
                if (data.message === "welcome") {
                    localStorage.setItem('user_id',data.id)
                    localStorage.setItem('token',data.token)
                    toast.success(`Welcome back ${data.firstname +" "+ data.lastname} !`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                else{
                    toast.error('Invalid info!', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
        }
        
    }


    if (!Open) return null
    if (IsRegister) {
        return(
            <section className="Sign_in_holder">
            <form className="sign_in_form Register_form">
                <div className="title">
                    Registration
                </div>
                <div className='Close'>  
                    <i className="fal fa-times-circle"  onClick={Close}></i>
                </div>
                <div className="form_body Registration">
                    <input type="text" placeholder="Nom" name="Lname" value={Lname} onChange ={handleChange}/>
                    <input type="text" placeholder="Prenom" name="Fname" value={Fname} onChange={handleChange}/>
                    <input type="string" placeholder="N°tele" name="Phone" value={Phone} onChange={handleChange}/>
                    <input type="email"  placeholder="Email" name="Email" value={Email} onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="Password" value={Password} onChange={handleChange}/>
                    <input type="password" placeholder="Password_confirmation" name="PasswordConfirmation" value={PasswordConfirmation} 
                    onChange={handleChange}/>
                </div>
                <div className="not_registred"onClick={ToSign_in}>
                    déjà membre ! connectez-vous
                </div>
                <div className="form_submit">
                    <button type="button" onClick={Sign_up}> Cree compte </button>
                </div>
                <div className="error">
                    {error_message}
                </div>
            </form>
        </section>
        )
    }else{

        return(
            <section className="Sign_in_holder">
                <form className="sign_in_form">
                    <div className="title">
                        Authentification
                    </div>
                    <div className='Close'>  
                        <i className="fal fa-times-circle"  onClick={Close}></i>
                    </div>
                    <div className="form_body">
                    <input type="email"  placeholder="Email" name="Email" value={Email} onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="Password" value={Password} onChange={handleChange}/>
                    </div>
                    <div className="not_registred" onClick={ToRegister}>
                        Nouveau membre ! créer un compte
                    </div>
                    <div className="form_submit">
                        <button type="button" onClick={Login}> Login </button>
                    </div>
                </form>
            </section>
        )
    }
    }


export default Sign_in;