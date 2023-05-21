import React, { useEffect, useState } from 'react'
import {Tournament, Match, Team, Player} from '../../types/types'
import { GET_TOURNAMENTS } from '../../../graphql/query';
import { useQuery} from '@apollo/client';
import DisplayTournament from './DisplayTournament';
import { useNavigate } from 'react-router-dom'
import { tournamentGameTypes } from '../../types/initialState';
import TournamentTable from './TournamentTable';



const DisplayTournaments = () => {
  const[filter, setFilter] = useState(false)
  const[selectedFilter, setSelectedFilter] = useState("All")
  const[showSelect, setShowSelect] = useState(true);
  
  const { loading, error, data } = useQuery(GET_TOURNAMENTS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>; 

  const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    let filter = event.target.value
    console.log(filter)
    if(filter === "All")
    {
      setFilter(false)
    }

    else{
      setFilter(true)
    
    }
    setSelectedFilter(filter)
  }

    return (
    <div className='select-tournament'>

      {showSelect && 
      
      <div>
        <select
            className="tournament_filter"
            name="tfilter"
            id="tfilter"
            onChange={onFilterChange}
          >
            {tournamentGameTypes &&
              tournamentGameTypes.map((game) => (
                <option
                  key={game}
                  value={tournamentGameTypes.find(x => x === game)}
                >
                  {game}
                </option>
              ))}
          </select>
        </div>
      }

      <TournamentTable showSelect={setShowSelect} tournaments={filter ? data.tournaments.filter((t: Tournament): t is Tournament => t.tournamentGame === selectedFilter ) : data.tournaments }/>

    </div>
  )
}

export default DisplayTournaments