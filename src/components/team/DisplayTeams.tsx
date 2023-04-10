import React, { useEffect, useState } from 'react'
import {Team, Player} from '../../utility/types'
import DisplayTeam from './DisplayTeam'


const DisplayTeams = () => {

    const ApiGet = async (setState : Function) => {
        try {
          const data = await fetch("http://localhost:3000/api/v1/team")
          const json = await data.json()

          setState(json.teams)    
        } 
        catch (error) {
          console.error(error)
        }
      }

    const [teams, setTeams] = useState<Team[]>([])
    const [team, setTeam] = useState<Team>({_id: "-1",name: "", captain: "0", players: new Array<Player>()})
    const [showTeam, setShowTeam] = useState(false)

    useEffect(() => {
        ApiGet(setTeams)
    }, [])

    function seeTeam(id: string) {
        let index = teams.findIndex((team) => team._id === id)
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
            <tr key={team._id}>
              <td>{team._id}</td>
              <td>{team.name}</td>
              <td>{team.captain}</td>
              <td>{team.players.length}</td>
              <td><button onClick={() => seeTeam(team._id)}>See Team</button></td>
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