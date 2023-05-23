import React from 'react'
import { Match } from '../../types/types'
import Modal from "../general/Modal";
import useModal from "../../hooks/useModal";
import { EditMatch } from '../match/EditMatch';
import { hasAccessVar } from '../../client/cache';


type Props = {
    match: Match;
    advanceTeamToNextStage: Function
  };

const MatchBracket:React.FC<Props> = ({match, advanceTeamToNextStage}): JSX.Element => {
    const { isOpen, toggle} = useModal();
    return (
        <div onClick={toggle} className="match" key={match._id}>
            {
            hasAccessVar() &&
            <Modal isOpen={isOpen} toggle={toggle} children={ <EditMatch  match={match} advanceTeamToNextStage={advanceTeamToNextStage} />} />
            }
            <div className="team">{match.teams![0] ? match.teams![0].name : "Stage not active"}</div>
            <div className="team">{match.teams![1] ? match.teams![1].name : "Stage not active"}</div>
        </div>
        )
}

export default MatchBracket