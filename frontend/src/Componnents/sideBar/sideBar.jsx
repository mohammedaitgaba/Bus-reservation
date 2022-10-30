import './sideBar.css'
function sideBar() {
  return (
    <section className='sideContainer'>
      <div className='links_container'>

        <div className="sidelinks">
          <i class="fal fa-map-marked-alt"></i>
          <p>Voyage</p>
        </div>

        <div className="sidelinks">
          <i class="fal fa-pen"></i>
          <p>reservation</p>
        </div>

        <div className="sidelinks">
          <i class="fal fa-bus"></i>
          <p>Buses</p>
        </div>
      </div>
    </section>
  )
}

export default sideBar