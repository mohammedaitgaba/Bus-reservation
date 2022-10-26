import './Form.css'
function Form() {
  return (
    <section className="Form_holder">
        <div className='contact'>
            Contacter Nous
        </div>
        <div className="big_title">
            Nous serions ravis de vous entendre
        </div>
        <div className="form_contact">
            <input type="text" placeholder="Prenom"/>
            <input type="text" placeholder="Nom"/>
            <input type="text" placeholder="Phone"/>
            <input type="text" placeholder="Email"/>
        </div>
        <div className="form_message">
            <textarea className='message' placeholder="Votre message"></textarea>
        </div>
        <div className="form_submit">
            <button>Envoyer</button>
        </div>
    </section>
  )
}

export default Form