import React, { useEffect, useState } from 'react'
import { ApiGet } from '../../utility/ApiFetcher'
import {Team, Player} from '../../utility/types'
import DisplayTeam from './DisplayTeam'


const DisplayTeams = () => {

    const [teams, setTeams] = useState<Team[]>([])
    const [team, setTeam] = useState<Team>({id: 0, name: "", owner: 0, players: new Array<Player>()})
    const [showTeam, setShowTeam] = useState(false)

    useEffect(() => {
        ApiGet('team', setTeams)
    }, [])

    function seeTeam(id : number) {
        let index = teams.findIndex((team) => team.id === id)
        setTeam(teams[index])
        setShowTeam(!showTeam)
    }

    return (
    <div>
    {!showTeam && 
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>Players</th>
                </tr>
            </thead>
            <tbody>
            {teams?.map( (team) => {
        return(
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.owner}</td>
              <td>{team.players.length}</td>
              <td><button onClick={() => seeTeam(team.id)}>See Team</button></td>
            </tr>
        )
      } )}
            </tbody>
        </table>
}

{showTeam && 
<DisplayTeam team={team} setShowTeam={setShowTeam}/>
}
    </div>
  )
}

export default DisplayTeams