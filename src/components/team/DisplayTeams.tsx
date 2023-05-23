import { useEffect, useState } from 'react'
import {Team} from '../../types/types'
import DisplayTeam from './DisplayTeam'
import {GET_TEAMS} from '../../../graphql/query'
import { useLazyQuery, useMutation, useQuery} from '@apollo/client';
import { teamInitialState } from '../../types/initialState';
import { useNavigate } from 'react-router-dom'
import Loading from '../general/Loading';
import { DELETE_TEAM } from '../../../graphql/mutations/teamMutation';
import {GET_TEAMS_LIST, GET_TEAM_DETAILED} from '../../../graphql/query'
import { TeamTable } from './TeamTable';

const DisplayTeams = () => {
  const navigate = useNavigate();
  const [ID, setID] = useState("")
  const[filter, setFilter] = useState(false)
  const[selectedFilter, setSelectedFilter] = useState("")

  const { loading, error, data } = useQuery(GET_TEAMS_LIST);
  const [team, setTeam] = useState<Team>(teamInitialState)
  const [showTeam, setShowTeam] = useState(false)
    
    const [getData, {loading: teamLoading, error: teamError}]  = useLazyQuery(GET_TEAM_DETAILED, {
      onCompleted(data) {
        setTeam(data.team)
        setShowTeam(true)
      },
    });

    useEffect(() => {  
      
    }, [team])
  
function seeTeam(id: string) {
    getData({ variables: {teamId: id}})
    
  }

  const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    let filter = event.target.value
    if(filter === "")
    {
      setFilter(false)
    }
    else{
      setFilter(true)
    }
    setSelectedFilter(filter.toLocaleLowerCase())
  }
  
  const [mutateFunction, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(DELETE_TEAM, {refetchQueries: [GET_TEAMS_LIST]});
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
      <input className='searchbar' onChange={onFilterChange} type="text" placeholder='Search'/>
        
        <TeamTable teams={filter ? data.teams.filter((t: Team): t is Team => t.name.toLocaleLowerCase().startsWith(selectedFilter )) : data.teams } deleteTeam={deleteTeam} seeTeam={seeTeam} />
        
        </div>
}

{showTeam && 
<DisplayTeam team={team} setShowTeam={setShowTeam}/>
}
    </div>
  
  
  )
}

export default DisplayTeams