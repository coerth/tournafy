import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
import {Team, Player} from '../../types/types'
import DisplayPlayers from '../player/DisplayPlayers'

type Props = {
    team: Team
    setShowTeam: Function
}

const DisplayTeam:React.FC<Props> = ({team, setShowTeam}): JSX.Element => {

    useEffect(() => {
    }, [])
    
    function returnToTeams() {
        setShowTeam(false)
    }

    return (
    <div>
    <DisplayPlayers players={team.players? team.players : []}/>
    <button onClick={returnToTeams}>Return</button>
    </div>
  )
}

export default DisplayTeam