import React, { useEffect, useState } from 'react'
import {Tournament, Match, Team, Player} from '../../types/types'
import { GET_TOURNAMENTS } from '../../../graphql/query';
import { useQuery} from '@apollo/client';
import DisplayTournament from './DisplayTournament';
import { useNavigate} from 'react-router-dom'
import TournamentTable from './TournamentTable';
import { tournamentGameTypes, tournamentInitialState } from '../../types/initialState';
import {useLocation} from 'react-router-dom';




const DisplayTournaments = () => {
  const[filter, setFilter] = useState(false)
  const[selectedFilter, setSelectedFilter] = useState("All")
  const [tournament, setTournament] = useState<Tournament>(tournamentInitialState);
  const [showTournament, setShowTournament] = useState(false)
  const location = useLocation()
  
  useEffect(() => {

if(location.state)
{
  setSelectedFilter(location.state.game)
  setFilter(true)
}


  }, [location])
  
  
  
  const { loading, error, data } = useQuery(GET_TOURNAMENTS);

  function seeTournament(id: string) {
    let index = data.tournaments?.findIndex((tournament: Tournament) => tournament._id === id)
    setTournament(data.tournaments[index])
    setShowTournament(!showTournament) 
  }

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
      <>
      <div>

      {!showTournament && 
    <div className='select-tournament'>
      
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

      <TournamentTable seeTournament={seeTournament} tournaments={filter ? data.tournaments.filter((t: Tournament): t is Tournament => t.tournamentGame === selectedFilter ) : data.tournaments }/>
      </div>
      }

      {showTournament &&
<DisplayTournament tournament={tournament} setShowTournament={setShowTournament}/>
}
    </div>
</>
  )
}

export default DisplayTournaments