import { useQuery } from '@apollo/client';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IS_LOGGED_IN, LOGGED_IN_PLAYER } from '../../graphql/query';
import { loggedInPlayerVar } from '../client/cache';
import { Player } from '../types/types';

const FrontPage = () => {
  const navigate = useNavigate();

  let player = localStorage.getItem("player");

  const {data} = useQuery(LOGGED_IN_PLAYER);
  if(player) console.log(JSON.parse(player? player : ""));


  return (
    <div>
        <div className='frontpage-top-div'>
        <h1 className='frontpage-headline'>Tournafy</h1>
        <p>Your go-to place for quality tournament running!</p>
        <div className='frontpage-menu' id='img1'>
        <section >
          <h1>Apex Legdends</h1>
          <p>See all Tournaments</p>
          <button onClick={()=>navigate("/tournament")}>Go to Tournaments</button>
        </section>
        </div>
        <div className='frontpage-menu' id='img2'>
        <section >
        <h1>CS:GO</h1>
        <p> See all Matches</p>
        <button onClick={()=>navigate("/match")}>Go to Matches</button>
        </section>
        </div>
        <div className='frontpage-menu' id='img3'>
        <section >
        <h1>League of Legends</h1>
        <p>See all tournaments for League of Legends</p>
        <button onClick={()=>navigate("/team")}>Go to Teams</button>
        </section>
        </div>
        <div className='frontpage-menu' id='img4'>
        <section >
        <h1>Valorant</h1>
        <p>See all tournaments for League of Legends</p>
        <button onClick={()=>navigate("/team")}>Go to Teams</button>
        </section>
        </div>
        <div className='frontpage-menu' id='img5'>
        <section >
        <h1>Rocket League</h1>
        <p>See all tournaments for League of Legends</p>
        <button onClick={()=>navigate("/team")}>Go to Teams</button>
        </section>
        </div>
      </div>
    </div>
  )


}

export default FrontPage