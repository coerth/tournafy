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
        <h1 className="h1-tournament">{tournament.name}</h1>
        <TournamentBracket matches={tournament.matches!}/>
        <DisplayMatches matches={tournament.matches} returnButton={returnToTournaments}/>
        
    </div>
  )
}

export default DisplayTournament