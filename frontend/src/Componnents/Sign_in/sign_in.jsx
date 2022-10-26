import {useState}  from "react";
import './sign_in.css'
const Sign_in = ({Open,Close})=>{
    // const [sign_in,setSign_in] = useState(false)
    console.log("in sign in ",Open);
    if (!Open) return null
    else{
        return(
            <section className="Sign_in_holder">
                <form className="sign_in_form">
                    <div className="title">
                        Authentification
                    </div>
                    <div className='Close'>  
                        <i class="fal fa-times-circle"  onClick={Close}></i>
                    </div>
                    <div className="form_body">
                        <input type="email" placeholder="email@exemple.xx" required/>
                        <input type="password" placeholder="Password" required/>
                    </div>
                    <div className="not_registred">
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