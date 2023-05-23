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

    const checkScore = (score: number) => {
      if(score == undefined){
        return 0
      }
      return score
    }
      
    return (
        <div onClick={toggle} className="match" key={match._id}>
            {
            hasAccessVar() &&
            <Modal isOpen={isOpen} toggle={toggle} children={ <EditMatch  match={match} advanceTeamToNextStage={advanceTeamToNextStage} />} />
            }
            <div className={checkUndefinedAndWinner(match.teams![0])}>
              <p className='alignleft'>{match.teams![0] ? match.teams![0].name : "-"} </p>
              <p className='alignright'>{match.teams![0] ? checkScore(match.score![0]) : 0}</p>
              <div className='clear'></div>
            </div>
            <div className={checkUndefinedAndWinner(match.teams![1])}>
              <p className='alignleft'>{match.teams![1] ? match.teams![1].name : "-"} </p>
              <p className='alignright'>{match.teams![1] ? checkScore(match.score![1]) : 0}</p>
              <div className='clear'></div>
            </div>
        </div>
        )
}

export default MatchBracket