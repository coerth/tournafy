import React from 'react'
import { Match } from '../../types/types'
import MatchBracket from "./MatchBracket";
import { hasAccessVar } from '../../client/cache';


type Props = {
    matches: Match[] | undefined;
    stage: number
    advanceTeamToNextStage: Function
  };

const StageBracket:React.FC<Props> = ({matches, stage, advanceTeamToNextStage}): JSX.Element => {
  console.log(stage)
  return (
    <div className="stage" key={stage}>
        {matches?.map((match: Match) => {
            
              return <MatchBracket match={match}/>
            
        })}

        {
        hasAccessVar() &&
        <button className='bracket-button' onClick={() => advanceTeamToNextStage(matches, stage)}>Next Stage</button>
        }
      </div>
  )
}

export default StageBracket