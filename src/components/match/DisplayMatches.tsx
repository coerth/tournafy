import { useState } from 'react'
import {Match, Team} from '../../types/types'
import DisplayMatch from './DisplayMatch'
import {GET_MATCHES} from '../../../graphql/query'
import { useQuery} from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import Loading from '../general/Loading';


type Props = {
  matches: Match[] | undefined;
  returnButton: Function
};

const DisplayMatches :React.FC<Props> = ({matches, returnButton}): JSX.Element => {
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
    <div className='select-tournament'>
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
              <td>{match.score![0]} - {match.score![1]}</td>
              <td>{match.teams![0]?.name} - {match.teams![1]?.name}</td>
            </tr>
        ))}
            </tbody>
        </table>
        <div className='table-button' >
        <button onClick={() =>returnButton()}>Return</button>
        </div>
        </div>
}

{showMatch && 
<DisplayMatch match={match} setShowMatch={setShowMatch}/>
}
    </div>
  )
}

export default DisplayMatches