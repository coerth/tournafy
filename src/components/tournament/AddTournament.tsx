import React from 'react'
import { useState } from 'react';
import { inputTournamentGameTypes, tournamentInputInitialState } from '../../types/initialState';
import { CREATE_TOURNAMENT, GET_TOURNAMENT_LIST } from '../../../graphql/mutations/tournamentMutation';
import {useMutation } from '@apollo/client';
import { GET_TOURNAMENTS } from '../../../graphql/query';
import { convertFormStringToDate, dateFormatForm } from '../../utility/date';
import Loading from '../general/Loading';


const AddTournament = () => {
    const [tournament, setTournament] = useState(tournamentInputInitialState);

    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_TOURNAMENT,{
        refetchQueries: [GET_TOURNAMENT_LIST]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...' <Loading/></>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const createNewTournament = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { input: tournament }}); 
        
    }
  return (
    <div>
        <form onSubmit={createNewTournament}>
          <h1>Add Tournament</h1>

          {data &&
            <h2>Tournament added!</h2>
         }

        <br/>
        Tournament Name
        <br/>
        <label>
        <input required type="text" name="name" placeholder='name' value={tournament.name} onChange={(evt)=>{setTournament({...tournament, name:evt.target.value})}}/>
        </label>
        <br/>
        Tournament Game
        <br/>
        <select
            className="tournament_filter"
            name="tfilter"
            id="tfilter"
            onChange={(evt)=>{setTournament({...tournament, tournamentGame:evt.target.value})}}
          >
            {inputTournamentGameTypes &&
              inputTournamentGameTypes.map((game) => (
                <option
                  key={game}
                  value={inputTournamentGameTypes.find(x => x === game)}
                >
                  {game}
                </option>
              ))}
          </select>
          <br/>
        {/* Minimum amount of teams
        <br/>
        <label>
        <input required type="number" name="minTeams" placeholder='minTeams' value={tournament.minTeams} onChange={(evt)=>{setTournament({...tournament, minTeams:parseInt(evt.target.value)})}}/>
        </label>
        <br/>
        Max amount of teams
        <br/>
        <label>
        <input required type="number" name="maxTeam" placeholder='maxTeam' value={tournament.maxTeams} onChange={(evt)=>{setTournament({...tournament, maxTeams: parseInt(evt.target.value)})}}/>
        </label>
        <br/> */}
          Start Date
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
          End Date
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
        <br/>
        <input type="submit" value="Add new Tournament" />
    </form>
    </div>
  )
}

export default AddTournament