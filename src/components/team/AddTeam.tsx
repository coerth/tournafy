import React from 'react'
import { useState } from 'react';
import { teamInputInitialState } from '../../types/initialState';
import { CREATE_TEAM } from '../../../graphql/mutations/teamMutation';
import {useMutation } from '@apollo/client';
import { GET_TEAMS, GET_TEAMS_LIST } from '../../../graphql/query';
import Loading from '../general/Loading';


const AddTeam = () => {
    const [team, setTeam] = useState(teamInputInitialState);

    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_TEAM,{
        refetchQueries: [GET_TEAMS_LIST]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...' <Loading/></>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const createNewTeam = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { input: team }}); 
    }
  return (
    <div>
        <form onSubmit={createNewTeam}>
        <h1>Add Team</h1>

        {data &&
            <h2>Team added!</h2>
         }
        <h4>Name</h4>
        <input required type="text" name="name" placeholder='name' value={team.name} onChange={(evt)=>{setTeam({...team, name:evt.target.value})}}/>
        
        <br/>
        <h4>Captain</h4>
        <input required type="text" name="captain" placeholder='captain id' value={team.captain} onChange={(evt)=>{setTeam({...team, captain:evt.target.value})}}/>

        <br/>
        <br />
        <input type="submit" value="Add new Team" />
    </form>
    </div>
  )
}

export default AddTeam