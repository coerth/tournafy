import { useEffect, useState } from 'react'
import {Team} from '../../types/types'
import DisplayTeam from './DisplayTeam'
import {GET_TEAMS_LIST, GET_TEAM_DETAILED} from '../../../graphql/query'
import { useLazyQuery, useQuery} from '@apollo/client';
import { useNavigate} from 'react-router-dom'
import Loading from '../general/Loading';
import { teamInitialState } from '../../types/initialState';


const DisplayTeams = () => {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_TEAMS_LIST);
  const [team, setTeam] = useState<Team>(teamInitialState)
  const [showTeam, setShowTeam] = useState(false)
    
    const [getData, {loading: teamLoading, error: teamError}]  = useLazyQuery(GET_TEAM_DETAILED, {
      onCompleted(data) {
        setTeam(data.team)
        setShowTeam(!showTeam)
      },
    });

    useEffect(() => {  
      
    }, [team])
  
function seeTeam(id: string) {
    getData({ variables: {teamId: id}})
    
  }
  
  if (loading || teamLoading) return <Loading/>
  if (error) return <p>Error : {error?.message}</p>; 
  if (teamError) return <p>Error : {teamError?.message}</p>; 

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
<DisplayTeam team={team} setShowTeam={setShowTeam}/>
}
    </div>
  
  
  )
}

export default DisplayTeams