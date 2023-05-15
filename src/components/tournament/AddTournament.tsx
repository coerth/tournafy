import React from 'react'
import { useState } from 'react';
import { tournamentInputInitialState } from '../../types/initialState';
import { CREATE_TOURNAMENT } from '../../../graphql/mutations/tournamentMutation';
import {useMutation } from '@apollo/client';
import { GET_TOURNAMENTS } from '../../../graphql/query';
import { convertFormStringToDate, dateFormatForm } from '../../utility/date';


const AddTournament = () => {
    const [tournament, setTournament] = useState(tournamentInputInitialState);

    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_TOURNAMENT,{
        refetchQueries: [GET_TOURNAMENTS]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const createNewTournament = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { input: tournament }}); 
        
    }
  return (
    <div>
        <form onSubmit={createNewTournament}>
          <h1>Add Tournament</h1>
        <br/>
        <label>
        <input required type="text" name="name" placeholder='name' value={tournament.name} onChange={(evt)=>{setTournament({...tournament, name:evt.target.value})}}/>
        </label>
        <br/>
        <label>
        <input required type="number" name="maxTeam" placeholder='maxTeam' value={tournament.maxTeams} onChange={(evt)=>{setTournament({...tournament, maxTeams: parseInt(evt.target.value)})}}/>
        </label>
        <br/>
        <label>
        <input required type="number" name="minTeams" placeholder='minTeams' value={tournament.minTeams} onChange={(evt)=>{setTournament({...tournament, minTeams:parseInt(evt.target.value)})}}/>
        </label>
        <br/>
        <label>
        <input
        type="date"
        name="startDate"
        min={dateFormatForm(new Date())}
        max="2050-12-31"
        onBlur={(evt)=>{setTournament({...tournament, startDate:convertFormStringToDate(evt.target.value)})}}
        required />
        </label>
        <br/>
        <label>
        <input
        type="date"
        name="EndDate"
        min={dateFormatForm(new Date())}
        max="2050-12-31"
        onBlur={(evt)=>{setTournament({...tournament, endDate:convertFormStringToDate(evt.target.value)})}}
        required />
        </label>
        <br/>
        <input type="submit" value="Add new Tournament" />
    </form>
    </div>
  )
}

export default AddTournament