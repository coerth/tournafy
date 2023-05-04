import React, { useEffect, useState } from 'react'
import {Tournament, Match, Team, Player} from '../../types/types'
import { GET_TOURNAMENTS } from '../../../graphql/query';
import { useQuery} from '@apollo/client';
import DisplayTournament from './DisplayTournament';
import { useNavigate } from 'react-router-dom'
import { tournamentInitialState } from '../../types/initialState';



const DisplayTournaments = () => {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_TOURNAMENTS);

  const [tournament, setTournament] = useState<Tournament>(tournamentInitialState);
  const [showTournament, setShowTournament] = useState(false)

  function seeTournament(id: string) {
    let index = data.tournaments?.findIndex((tournament: Tournament) => tournament._id === id)
    setTournament(data.tournaments[index])
    setShowTournament(!showTournament)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>; 

    return (
    <div>
      {!showTournament &&
      <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    {/* <th>Game Type</th> */}
                    {/* <th>Available Spots</th> */}
                </tr>
            </thead>
            <tbody>
            {data.tournaments?.map( (tournament:Tournament) => {
        return(
            <tr key={tournament._id}>
              <td>{tournament._id}</td>
              <td>{tournament.name}</td>
              <td>{tournament.startDate}</td>
              <td>{tournament.endDate}</td>
              {/* <td>{tournament.gameType}</td> */}
              {/* <td>{tournament.maxTeams? tournament.maxTeams - tournament.teams.length : 0}</td> */}
              <td><button onClick={() => seeTournament(tournament._id? tournament._id : "")}>See Tournament</button></td>

            </tr>
        )
      } )}
            </tbody>
        </table>
        <button onClick={()=>navigate(-1)}>Return</button>

        </div>
}

{showTournament &&
<DisplayTournament tournament={tournament} setShowTournament={setShowTournament}/>
}
    </div>
  )
}

export default DisplayTournaments