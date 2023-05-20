import React from 'react'
import { Match } from '../../types/types'
import MatchBracket from "./MatchBracket";


type Props = {
    matches: Match[] | undefined;
    key: number
    advanceTeamToNextStage: Function
  };

const StageBracket:React.FC<Props> = ({matches, key, advanceTeamToNextStage}): JSX.Element => {
  return (
    <div className="stage" key={key}>
        {matches?.map((match: Match) => {
            
              return <MatchBracket match={match}/>
            
        })}

        <button onClick={advanceTeamToNextStage(matches, key)}>Next Stage</button>
      </div>
  )
}

export default StageBracket