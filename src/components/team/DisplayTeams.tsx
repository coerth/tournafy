import { useState } from 'react'
import {Team, Player} from '../../types/types'
import DisplayTeam from './DisplayTeam'
import {GET_TEAMS} from '../../../graphql/query'
import { useQuery} from '@apollo/client';

const DisplayTeams = () => {

  const { loading, error, data } = useQuery(GET_TEAMS);
  
  const [team, setTeam] = useState<Team>({_id: "-1",name: "", captain: {name: ""}, players: new Array<Player>()})
  const [showTeam, setShowTeam] = useState(false)
  
  function seeTeam(id: string) {
    let index = data.teams?.findIndex((team: Team) => team._id === id)
    setTeam(data.teams[index])
    setShowTeam(!showTeam)
  }
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>; 

    return (
    <div>
    {!showTeam &&
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Captain</th>
                    <th>Players</th>
                </tr>
            </thead>
            <tbody>
            {data.teams.map( (team:Team ) => (
            <tr key={team._id}>
              <td>{team._id}</td>
              <td>{team.name}</td>
              <td>{team.captain.name}</td>
              <td>{team.players?.length}</td>
              <td><button onClick={() => seeTeam(team._id? team._id : "")}>See Team</button></td>
            </tr>
        ))}
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