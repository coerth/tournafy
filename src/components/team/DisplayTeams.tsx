import { useEffect, useState } from 'react'
import {Team} from '../../types/types'
import DisplayTeam from './DisplayTeam'
import {GET_TEAMS} from '../../../graphql/query'
import { useLazyQuery, useMutation, useQuery} from '@apollo/client';
import { teamInitialState } from '../../types/initialState';
import { useNavigate } from 'react-router-dom'
import Loading from '../general/Loading';
import { DELETE_TEAM } from '../../../graphql/mutations/teamMutation';
import { hasAccessVar } from '../../client/cache';
import {GET_TEAMS_LIST, GET_TEAM_DETAILED} from '../../../graphql/query'

const DisplayTeams = () => {
  const navigate = useNavigate();
  const [ID, setID] = useState("")

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
  
  const [mutateFunction, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(DELETE_TEAM, {refetchQueries: [GET_TEAMS]});
if (mutationLoading) return <>'Submitting...' <Loading/></>;
if (mutationError) return <>`Submission error! ${mutationError.message}`</>;

const deleteTeam = (teamId: string) => {
    console.log(teamId);
    setID(teamId);
    mutateFunction({variables: { deleteTeamId: teamId }}); 
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