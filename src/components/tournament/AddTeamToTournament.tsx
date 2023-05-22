import React, { useState } from 'react'
import { GET_TOURNAMENTS, GET_TOURNAMENTS_AND_TEAMS } from '../../../graphql/query';
import { useQuery, useMutation} from '@apollo/client';
import Dropdown from '../general/Dropdown';
import { ADD_TEAM_TO_TOURNAMENT } from '../../../graphql/mutations/tournamentMutation';
import Loading from '../general/Loading';


const AddTeamToTournament = () => {
    const [selectedTournament, setselectedTournament] = useState("")
    const [selectedTeam, setselectedTeam] = useState("")


    const { loading, error, data } = useQuery(GET_TOURNAMENTS_AND_TEAMS);

    const [mutateFunction, {loading: mutationLoading, error: mutationError, data: mutationData } ] = useMutation(ADD_TEAM_TO_TOURNAMENT,{
        refetchQueries: [GET_TOURNAMENTS_AND_TEAMS, GET_TOURNAMENTS]
    });

    const AddTeamToTournament = () => {
        mutateFunction({variables: { addTeamToTournamentId: selectedTournament, input: {teamID: selectedTeam} }}); 
        
    }

    if (loading) return <Loading/>
    if (error) return <p>Error : {error.message}</p>; 
    if (mutationLoading) return <>'Submitting...' <Loading/></>;
    if (mutationError) return <>`Submission error! ${mutationError.message}`</>;

    const onTournamentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        let tournamentId = event.target.value
        
        setselectedTournament(tournamentId)
      }

      const onTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        let teamId = event.target.value
        
        setselectedTeam(teamId)
      }

  return (
    <div>
        <h1>AddTeamToTournament</h1>

        {mutationData &&
            <h2>Team added!</h2>
        }

        <h3>Select Tournament</h3>
        <Dropdown array={data.tournaments} onChange={onTournamentChange} />

        <h3>Select Team</h3>
        <Dropdown array={data.teams} onChange={onTeamChange} />

        <button onClick={AddTeamToTournament}>Add Team</button>
        </div>
  )
}

export default AddTeamToTournament