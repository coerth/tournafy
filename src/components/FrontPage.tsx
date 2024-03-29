import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import {LOGGED_IN_PLAYER } from '../../graphql/query';


const FrontPage = () => {
  const navigate = useNavigate();

  const {data} = useQuery(LOGGED_IN_PLAYER);

  return (
    <div>
        <div className='frontpage-top-div'>
        <h1 className='frontpage-headline'>Tournafy</h1>
        <p>Your go-to place for quality tournament running!</p>
        <div className='frontpage-menu' id='img1' onClick={()=>navigate("/tournament", {state: {game: "Apex Legends"}})}>
        <section >
          <h1>Apex Legends</h1>

        </section>
        </div>
        <div className='frontpage-menu' id='img2' onClick={()=>navigate("/tournament", {state: {game: "Counter Strike"}})}>
        <section >
        <h1>CS:GO</h1>
        </section>
        </div>
        <div className='frontpage-menu' id='img3' onClick={()=>navigate("/tournament", {state: {game: "League of Legends"}})}>
        <section >
        <h1>League of Legends</h1>
        </section>
        </div>
        <div className='frontpage-menu' id='img4' onClick={()=>navigate("/tournament", {state: {game: "Valorant"}})}>
        <section >
        <h1>Valorant</h1>
        </section>
        </div>
        <div className='frontpage-menu' id='img5' onClick={()=>navigate("/tournament", {state: {game: "Rocket League"}})}>
        <section >
        <h1>Rocket League</h1>
        </section>
        </div>
      </div>
    </div>
  )


}

export default FrontPage