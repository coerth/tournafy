import React from 'react'
import { Match, Team } from '../../types/types'
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

    const checkUndefinedAndWinner =(team: Team) => {
        if(team == undefined)
        {
            return "team"
        }
        
        if(team.name === match.winner?.name)
        {
            return "teamWinner"
        }

        return "team"
    }
      
    return (
        <div onClick={toggle} className="match" key={match._id}>
            {
            hasAccessVar() &&
            <Modal isOpen={isOpen} toggle={toggle} children={ <EditMatch  match={match} advanceTeamToNextStage={advanceTeamToNextStage} />} />
            }
            <div className={checkUndefinedAndWinner(match.teams![0])}>{match.teams![0] ? match.teams![0].name : "-"}</div>
            <div className={checkUndefinedAndWinner(match.teams![1])}>{match.teams![1] ? match.teams![1].name : "-"}</div>
        </div>
        )
}

export default MatchBracket