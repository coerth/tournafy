import React from 'react'
import { Match } from '../../types/types'
import MatchBracket from "../match/MatchBracket";


type Props = {
    matches: Match[] | undefined;
  };

const StageBracket:React.FC<Props> = ({matches}): JSX.Element => {
  return (
    <div className="stage">
        {matches?.map((match: Match) => {
            
              return <MatchBracket match={match}/>
            
        })}
      </div>
  )
}

export default StageBracket