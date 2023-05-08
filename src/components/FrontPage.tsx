import React from 'react'
import { useNavigate } from 'react-router-dom'
//import Modal from './modal/modal';
//import useModal from '../hooks/useModal';


const FrontPage = () => {
  //const { isOpen, toggle } = useModal();

  const navigate = useNavigate();

  return (
    <>
    <div>
        <div className='frontpage-top-div'>
        <h1 className='frontpage-headline'>Tournafy</h1>
        <p>Your go-to place for quality tournament running!</p>
        <div className='frontpage-menu'>
        <section >
          <h3>Tournaments</h3>
          <p>See all Tournaments</p>
          <button onClick={()=>navigate("/tournament")}>Go to Tournaments</button>
        </section>
        </div>
        <div className='frontpage-menu'>
        <section >
        <h3>Matches</h3>
        <p> See all Matches</p>
        <button onClick={()=>navigate("/match")}>Go to Matches</button>
        </section>
        </div>
        <div className='frontpage-menu'>
        <section >
        <h3>Teams</h3>
        <p>See all Teams</p>
        <button onClick={()=>navigate("/team")}>Go to Teams</button>
        </section>
        </div>
        <div className='frontpage-menu'>
        <section >
        <h3>Modal Test</h3>
        <p>See Modal</p>
        </section>
        </div>
        </div>
      
      </div>
      </>
  )

  function goToTournaments() {
}
}

export default FrontPage