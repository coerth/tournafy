import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
import {Tournament} from '../../types/types'
import DisplayTournaments from '../tournament/DisplayTournaments'


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
    <button onClick={returnToTournaments}>Return</button>
    </div>
  )
}

export default DisplayTournament