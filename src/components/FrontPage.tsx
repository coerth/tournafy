import { useQuery } from '@apollo/client';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IS_LOGGED_IN, LOGGED_IN_PLAYER } from '../../graphql/query';

const FrontPage = () => {
  const navigate = useNavigate();

  const {data} = useQuery(LOGGED_IN_PLAYER)
  if(data) console.log(data.loggedInPlayer)

  return (
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
      </div>
    </div>
  )

  function goToTournaments() {
}
}

export default FrontPage