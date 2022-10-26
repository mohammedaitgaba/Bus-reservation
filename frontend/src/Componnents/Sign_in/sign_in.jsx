import {useState}  from "react";
import './sign_in.css'
const Sign_in = ({Open,Close})=>{
    const [IsRegister,setRegister] = useState(false)
    const ToRegister =()=>{
        setRegister(true)
    }
    const ToSign_in=()=>{ 
        setRegister(false)
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
                    <input type="text" placeholder="Nom" required/>
                    <input type="text" placeholder="Prenom" required/>
                    <input type="number" placeholder="N°tele"  required/>
                    <input type="email"  placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <input type="password" placeholder="Password_confirmation" required/>
                </div>
                <div className="not_registred"onClick={ToSign_in}>
                    déjà membre ! connectez-vous
                </div>
                <div className="form_submit">
                    <button type="button"> Cree compte </button>
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
                        <input type="email" placeholder="email@exemple.xx" required/>
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <div className="not_registred" onClick={ToRegister}>
                        Nouveau membre ! créer un compte
                    </div>
                    <div className="form_submit">
                        <button type="button"> Login </button>
                    </div>
                </form>
            </section>
        )
    }
    }


export default Sign_in;