import {useState} from 'react'
import {Tournament, Match, Team, Player} from '../../types/types'
import { tournamentGameTypes, tournamentInitialState } from '../../types/initialState';
import { useNavigate } from 'react-router-dom'
import DisplayTournament from './DisplayTournament';
import { stringToDate } from '../../utility/date';


type Props = {
    tournaments: Tournament[]
    seeTournament: Function
}
const TournamentTable:React.FC<Props> = ({tournaments, seeTournament}): JSX.Element => {
    const navigate = useNavigate();


  

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