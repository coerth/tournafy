import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
import {Team, Tournament} from '../../types/types'
import DisplayPlayers from '../player/DisplayPlayers'
import { stringToDate } from '../../utility/date'

type Props = {
    team: Team
    setShowTeam: Function
}

const DisplayTeam:React.FC<Props> = ({team, setShowTeam}): JSX.Element => {

    useEffect(() => {
    }, [])
    
    function returnToTeams() {
        setShowTeam(false)
    }

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