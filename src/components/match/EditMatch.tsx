import React, { useState } from 'react';
import { useMutation} from '@apollo/client';
import { UPDATE_MATCH } from '../../../graphql/mutations/matchMutation';
import { GET_MATCHES, GET_TOURNAMENTS } from '../../../graphql/query';
import Dropdown from '../general/Dropdown';
import '../../styles/Modal.css'
import { Match } from '../../types/types';
import Loading from '../general/Loading';
import { matchInput } from '../../types/initialState';

type EditMatchProps = {
  match: Match,
  advanceTeamToNextStage: Function
};

export const EditMatch: React.FC<EditMatchProps> = ({ match, advanceTeamToNextStage }) => {
  const [updateMatch, setUpdateMatch] = useState({...matchInput, winner: match.teams![0] ? match.teams![0]._id : matchInput.winner});

  
  const [mutateFunction, {
    loading: mutationLoding,
    error: mutationError,
    data: mutationData } ] = useMutation(UPDATE_MATCH,{
    refetchQueries: [GET_TOURNAMENTS, GET_MATCHES],

    onCompleted(data) {

      advanceTeamToNextStage(data.updateMatch, data.updateMatch.stage)
    },
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

  return (
    <div className='modal-outer-div'>
      <h1 className='h-modal'>Edit Match</h1>

      <form onSubmit={handleSubmit}>

        <h3 className='h-modal'>Winner</h3>
        <Dropdown array={match.teams!} onChange={handleSelectChange}  />
        <br />

        {match.teams![0] && 
        <div>
          <h3 className='h-modal'>{match.teams![0].name ? match.teams![0].name : "-"} Score</h3>
          <input type="text" value={updateMatch.teamAScore} onChange={(evt) => {setUpdateMatch({...updateMatch, teamAScore: parseInt(evt.target.value)})}} />
        </div>
        }

        <br />

        {match.teams![1] &&
          <div>
            <h3 className='h-modal'>{match.teams![1].name ? match.teams![1].name : "-"} Score</h3>
            <input type="text" value={updateMatch.teamBScore} onChange={(evt) => {setUpdateMatch({...updateMatch, teamBScore: parseInt(evt.target.value)})}} />
          </div>
        }
        <br />
        <br />

        <button type="submit">Update Match</button>
      </form>
    </div>
  );
};