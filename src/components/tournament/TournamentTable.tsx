import {Tournament} from '../../types/types'
import { useNavigate } from 'react-router-dom'
import { stringToDate } from '../../utility/date';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Loading from '../general/Loading';
import { DELETE_TOURNAMENT } from '../../../graphql/mutations/tournamentMutation';
import { GET_TOURNAMENTS } from '../../../graphql/query';
import { hasAccessVar } from '../../client/cache';


type Props = {
    tournaments: Tournament[]
    seeTournament: Function
}
const TournamentTable:React.FC<Props> = ({tournaments, seeTournament}): JSX.Element => {
    const navigate = useNavigate();

    const [ID, setID] = useState("")


  const [mutateFunction, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(DELETE_TOURNAMENT, {
    refetchQueries: [GET_TOURNAMENTS]
  });
  if (mutationLoading) return <>'Submitting...' <Loading/></>;
  if (mutationError) return <>`Submission error! ${mutationError.message}`</>;

const deleteTournament = (tournamentId: string) => {
    console.log(tournamentId);
    setID(tournamentId);
    mutateFunction({variables: { deleteTournamentId: tournamentId }}); 
}  

  return (
    <div className='outer-table'>

      <div >
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Game</th>
                    <th>Type</th>
                    <th>Open Spots</th> 
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
            {tournaments?.map( (tournament:Tournament) => {
        return(
            <tr key={tournament._id}>
              <td>{tournament.name}</td>
              <td>{tournament.tournamentGame ? tournament.tournamentGame : ""}</td>
              <td>{tournament.tournamentType}</td>
              { <td>{tournament.maxTeams? tournament.maxTeams - tournament.teams?.length! : 0}</td> }
              <td>{ stringToDate(tournament.startDate ? tournament.startDate : "")}</td>
              <td>{stringToDate(tournament.endDate ? tournament.endDate : "")}</td>
              <td><button onClick={() => seeTournament(tournament._id? tournament._id : "")}>See Tournament</button></td>
              {
                hasAccessVar() &&
              <td><button onClick={() => deleteTournament(tournament._id!)}>Delete</button></td>
              }

            </tr>
        )
      } )}
            </tbody>
        </table>
        <div className='table-button' >
          <button onClick={()=>navigate(-1)}>Return</button>
        </div>

        </div>



    </div>
  )
}

export default TournamentTable