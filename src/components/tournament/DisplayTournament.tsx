import React, { useEffect} from 'react'
import '../../styles/App.css'
import {Tournament} from '../../types/types'
import TournamentBracket from '../bracket/TournamentBracket'
import DisplayMatches from '../match/DisplayMatches'


type Props = {
    tournament: Tournament
    setShowTournament: Function
}

const DisplayTournament:React.FC<Props> = ({tournament, setShowTournament}): JSX.Element => {
    

    useEffect(() => {
    }, [])
    
    function returnToTournaments() {
        setShowTournament(false)
    }

    return (
    <div>
        <TournamentBracket matches={tournament.matches} returnButton={returnToTournaments}/>
        <DisplayMatches matches={tournament.matches}/>
    </div>
  )
}

export default DisplayTournament