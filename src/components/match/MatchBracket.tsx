import React from 'react'
import { Match } from '../../types/types'


type Props = {
    match: Match;
  };

const MatchBracket:React.FC<Props> = ({match}): JSX.Element => {
    return (
        <div className="match" key={match._id}>
            <div className="team">{match.teams[0] ? match.teams[0].name : "Stage not active"}</div>
            <div className="team">{match.teams[1] ? match.teams[1].name : "Stage not active"}</div>
        </div>
        )
}

export default MatchBracket