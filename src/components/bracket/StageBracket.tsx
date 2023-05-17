import React from 'react'
import { Match } from '../../types/types'
import MatchBracket from "./MatchBracket";


type Props = {
    matches: Match[] | undefined;
    key: number
  };

const StageBracket:React.FC<Props> = ({matches, key}): JSX.Element => {
  return (
    <div className="stage" key={key}>
        {matches?.map((match: Match) => {
            
              return <MatchBracket match={match}/>
            
        })}
      </div>
  )
}

export default StageBracket