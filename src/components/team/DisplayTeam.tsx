import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
import {Team, Tournament} from '../../types/types'
import DisplayPlayers from '../player/DisplayPlayers'
import { stringToDate } from '../../utility/date'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery} from '@apollo/client';
import { GET_TEAM_DETAILED } from '../../../graphql/query'
import Loading from '../general/Loading'
import { teamInitialState } from '../../types/initialState'


type Props = {
    teamId: string
    setShowTeam: Function
}

const DisplayTeam:React.FC<Props> = ({teamId, setShowTeam}): JSX.Element => {
    const [team, setTeam] = useState<Team>(teamInitialState)

    const { loading, error, data } = useQuery(GET_TEAM_DETAILED, {
      variables: {teamId: teamId},
    });
    
    useEffect(() => {
        if(data)
        {
        setTeam(data.team)
        }

    }, [teamId])
    
    
    function returnToTeams() {
        setShowTeam(false)
    }

  if (loading) return <Loading/>
  if (error) return <p>Error : {error.message}</p>; 


    return (
    <div>
        <h2>Players:</h2>
    <DisplayPlayers players={team.players? team.players : []}/>
        <br />
        <h2>{team.name} are in the following tournaments:</h2>
    <div>
    <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Game</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
            {team.tournaments?.map( (tournament:Tournament) => {
        return(
            <tr key={tournament._id}>
              <td>{tournament.name}</td>
              <td>{tournament.tournamentGame ? tournament.tournamentGame : ""}</td>
              <td>{ stringToDate(tournament.startDate ? tournament.startDate : "")}</td>
              <td>{stringToDate(tournament.endDate ? tournament.endDate : "")}</td>


            </tr>
        )
      } )}
            </tbody>
        </table>
    </div>

    <button onClick={returnToTeams}>Return</button>
    </div>
  )
}

export default DisplayTeam