import { useState } from 'react'
import {Match, Team, Player} from '../../types/types'
import DisplayMatch from './DisplayMatch'
import {GET_MATCHES} from '../../../graphql/query'
import { useQuery} from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading';


type Props = {
  matches: Match[] | undefined;
};

const DisplayMatches :React.FC<Props> = ({matches}): JSX.Element => {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_MATCHES);
  
  const [match, setMatch] = useState<Match>({_id: "-1",location: "", winner: {name: "", captain: {name: ""}}, score: [], stage: 0, teams: new Array<Team>()})
  const [showMatch, setShowMatch] = useState(false)
  
  function seeMatch(id: string) {
    let index = data.matches?.findIndex((match: Match) => match._id === id)
    setMatch(data.matches[index])
    setShowMatch(!showMatch)
  }
  
  if (loading) return <Loading/>
  if (error) return <p>Error : {error.message}</p>; 

    return (
    <div>
    {!showMatch &&
    <div>
        <table>
            <thead>
                <tr>
                    <th>Score</th>
                    <th>Teams</th>
                </tr>
            </thead>
            <tbody>
            {matches!.map( (match: Match ) => (
            <tr key={match._id}>
              <td>{match.score![0]} {match.score![1]}</td>
              <td>{match.teams![0]?.name} {match.teams![1]?.name}</td>
              {/* <td><button onClick={() => seeMatch(match._id? match._id : "")}>See Match</button></td> */}
            </tr>
        ))}
            </tbody>
        </table>
        {/* <button onClick={()=>navigate(-1)}>Return</button> */}

        </div>
}

{showMatch && 
<DisplayMatch match={match} setShowMatch={setShowMatch}/>
}
    </div>
  )
}

export default DisplayMatches