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
  return (
    <div className="stage" key={stage}>
        {matches?.map((match: Match) => {
            
              return <MatchBracket match={match} advanceTeamToNextStage={advanceTeamToNextStage}/>
            
        })}
      </div>
  )
}

export default StageBracket