import React, { useEffect, useState } from 'react'
import { ApiGet } from '../../utility/ApiFetcher'
import {Tournament} from '../../utility/types'


const DisplayTournament = () => {

    const [tournaments, setTournaments] = useState<Tournament[]>([])
    
    useEffect(() => {
        ApiGet('tournament', setTournaments)
    }, [])


    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Game Type</th>
                    <th>Available Spots</th>
                </tr>
            </thead>
            <tbody>
            {tournaments?.map( (tournament) => {
        return(
            <tr key={tournament.id?.id}>
              <td>{tournament.id?.id}</td>
              <td>{tournament.startDate}</td>
              <td>{tournament.endDate}</td>
              <td>{tournament.gameType}</td>
              <td>{tournament.maxTeams - tournament.teams.length}</td>
            </tr>
        )
      } )}
            </tbody>
        </table>
    </div>
  )
}

export default DisplayTournament