import React, { useEffect, useState } from 'react'
import {Tournament} from '../../utility/types'


const DisplayTournament = () => {

    const ApiGet = async (setState : Function) => {
        try {
          const data = await fetch("http://localhost:3000/api/v1/tournament")
          const json = await data.json()
          
          setState(json.tournaments)    
        } 
        catch (error) {
          console.error(error)
        }
      }

    const [tournaments, setTournaments] = useState<Tournament[]>([])
    
    useEffect(() => {
        ApiGet(setTournaments)
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
            <tr key={tournament._id}>
              <td>{tournament._id}</td>
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