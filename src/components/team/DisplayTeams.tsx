import { useState } from 'react'
import {Team} from '../../types/types'
import DisplayTeam from './DisplayTeam'
import {GET_TEAMS} from '../../../graphql/query'
import { useMutation, useQuery} from '@apollo/client';
import { teamInitialState } from '../../types/initialState';
import { useNavigate } from 'react-router-dom'
import Loading from '../general/Loading';
import { DELETE_TEAM } from '../../../graphql/mutations/teamMutation';
import { hasAccessVar } from '../../client/cache';



const DisplayTeams = () => {
  const navigate = useNavigate();
  const [ID, setID] = useState("")
  
  const { loading, error, data } = useQuery(GET_TEAMS);
  
  const [team, setTeam] = useState<Team>(teamInitialState)
  const [showTeam, setShowTeam] = useState(false)
  
  function seeTeam(id: string) {
    let index = data.teams?.findIndex((team: Team) => team._id === id)
    setTeam(data.teams[index])
    setShowTeam(!showTeam)
  }
  if (loading) return <Loading/>
  if (error) return <p>Error : {error.message}</p>; 
  
  const [mutateFunction, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(DELETE_TEAM, {refetchQueries: [GET_TEAMS]});
if (mutationLoading) return <>'Submitting...' <Loading/></>;
if (mutationError) return <>`Submission error! ${mutationError.message}`</>;

const deleteTeam = (teamId: string) => {
    console.log(teamId);
    setID(teamId);
    mutateFunction({variables: { deleteTeamId: teamId }}); 
}

    return (
    <div className='select-tournament'>
    {!showTeam &&
    <div>
        <table>
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Captain</th>
                    <th>Players</th>
                </tr>
            </thead>
            <tbody>
            {data.teams.map( (team:Team ) => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>{team.captain.name}</td>
              <td>{team.players?.length}</td>
              <td><button onClick={() => seeTeam(team._id? team._id : "")}>See Team</button></td>
              {
               hasAccessVar() && 
              <td><button onClick={() => deleteTeam(team._id!)}>Delete</button></td>
              }
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