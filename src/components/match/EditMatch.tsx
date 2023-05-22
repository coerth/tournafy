import React, { useState } from 'react';
import { useMutation} from '@apollo/client';
import { UPDATE_MATCH } from '../../../graphql/mutations/matchMutation';
import { GET_MATCHES, GET_TOURNAMENTS } from '../../../graphql/query';
import Dropdown from '../general/Dropdown';
import '../../styles/Modal.css'
import { Match } from '../../types/types';
import Loading from '../general/Loading';

type EditMatchProps = {
  match: Match
};

export const EditMatch: React.FC<EditMatchProps> = ({ match }) => {
  const [updateMatch, setUpdateMatch] = useState({winner: match.teams![0]._id,
    teamAScore: match.score!.length > 0 ? 0 : match.score![0], teamBScore: match.score!.length > 0 ? 0 : match.score![0]});

  
  const [mutateFunction, {
    loading: mutationLoding,
    error: mutationError,
    data: mutationData } ] = useMutation(UPDATE_MATCH,{
    refetchQueries: [GET_TOURNAMENTS, GET_MATCHES]
});

 const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  event.preventDefault();
  const updatedWinner = event.target.value;
  setUpdateMatch({...updateMatch, winner: updatedWinner});
};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutateFunction({
      variables: {
        updateMatchId: match._id,
        input: {winner: updateMatch.winner, location: match.location ? match.location : "", stage: match.stage, score: [updateMatch.teamAScore, updateMatch.teamBScore]}
      },
    });
  };

  if (mutationLoding) return <>'Submitting...' <Loading/></>;
  if (mutationError) return <>`Submission error! ${mutationError.message}`</>;
  if ( mutationData) console.log(mutationData)

  return (
    <div className='modal-outer-div'>
      <h1 className='h-modal'>Edit Match</h1>

      <form onSubmit={handleSubmit}>

        <h3 className='h-modal'>Winner</h3>
        <Dropdown array={match.teams!} onChange={handleSelectChange}  />
        <br />

        <h3 className='h-modal'>{match.teams![0].name} Score</h3>
        <input type="text" value={updateMatch.teamAScore} onChange={(evt) => {setUpdateMatch({...updateMatch, teamAScore: parseInt(evt.target.value)})}} />

        <br />
        <h3 className='h-modal'>{match.teams![1].name} Score</h3>
        <input type="text" value={updateMatch.teamBScore} onChange={(evt) => {setUpdateMatch({...updateMatch, teamBScore: parseInt(evt.target.value)})}} />
        <br />
        <br />

        <button type="submit">Update Match</button>
      </form>
    </div>
  );
};