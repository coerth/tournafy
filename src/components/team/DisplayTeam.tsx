import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
import {Team, Tournament} from '../../types/types'
import DisplayPlayers from '../player/DisplayPlayers'
import { stringToDate } from '../../utility/date'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyQuery, useMutation, useQuery} from '@apollo/client';
import { GET_TEAMS_LIST, GET_TEAM_DETAILED, GET_TOURNAMENTS_AND_TEAMS } from '../../../graphql/query'
import Loading from '../general/Loading'
import { teamInitialState } from '../../types/initialState'
import { UPDATE_TEAM } from '../../../graphql/mutations/teamMutation'
import { match } from 'assert'


type Props = {
    team: Team
    setShowTeam: Function
}

const DisplayTeam:React.FC<Props> = ({team, setShowTeam}): JSX.Element => {

    const [mutateFunction, {loading: mutationLoading, error: mutationError, data: mutationData } ] = useMutation(UPDATE_TEAM,{
        refetchQueries: [GET_TEAM_DETAILED]
    });

    const removePlayer = (playerId: string) => {
        let players = [...team.players!]
        let index = players!.findIndex( player => player._id === playerId )

       players!.splice(index, 1)

        let playerIdArray: string[] = []
        players?.forEach( player => playerIdArray.push(player._id!.toString()))

        mutateFunction({variables: { updateTeamId: team._id, input: {captain: team.captain._id, players: playerIdArray } }}); 
    }

    function returnToTeams() {
        setShowTeam(false)
    }



    return (
    <div>
        <h2>Players:</h2>
    <DisplayPlayers players={team.players? team.players : []} removePlayer={removePlayer}/>
        <br />
        <h2>{team.name} are in the following tournaments:</h2>
    <div>
    <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Game</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
            {team.tournaments?.map( (tournament:Tournament) => {
        return(
            <tr key={tournament._id}>
              <td>{tournament.name}</td>
              <td>{tournament.tournamentGame ? tournament.tournamentGame : ""}</td>
              <td>{ stringToDate(tournament.startDate ? tournament.startDate : "")}</td>
              <td>{stringToDate(tournament.endDate ? tournament.endDate : "")}</td>


            </tr>
        )
      } )}
            </tbody>
        </table>
    </div>

    <button onClick={returnToTeams}>Return</button>
    </div>
  )
}

export default DisplayTeam