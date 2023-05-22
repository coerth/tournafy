import { useState } from 'react'
import {Team} from '../../types/types'
import DisplayTeam from './DisplayTeam'
import {GET_TEAMS, GET_TEAMS_LIST, GET_TEAM_DETAILED} from '../../../graphql/query'
import { useQuery} from '@apollo/client';
import { teamInitialState } from '../../types/initialState';
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../general/Loading';


const DisplayTeams = () => {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_TEAMS_LIST);
  
  const [teamId, setTeamId] = useState("")
  const [showTeam, setShowTeam] = useState(false)
  
  function seeTeam(id: string) {

    setTeamId(id)
    setShowTeam(!showTeam)
  }
  
  if (loading) return <Loading/>
  if (error) return <p>Error : {error.message}</p>; 

    return (
    <div className='select-tournament'>
    {!showTeam &&
    <div>
        <table>
            <thead>
                <tr>

                    <th>Name</th>

                </tr>
            </thead>
            <tbody>
            {data.teams.map( (team:Team ) => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td><button onClick={() => seeTeam(team._id? team._id : "")}>See Team</button></td>
            </tr>
        ))}
            </tbody>
        </table>
        <button onClick={()=>navigate(-1)}>Return</button>
        
        </div>
}

{showTeam && 
<DisplayTeam teamId={teamId} setShowTeam={setShowTeam}/>
}
    </div>
  
  
  )
}

export default DisplayTeams