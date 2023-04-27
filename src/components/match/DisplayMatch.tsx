import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
import {Match} from '../../types/types'

type Props = {
    match: Match
    setShowMatch: Function
}

const DisplayMatch:React.FC<Props> = ({match, setShowMatch}): JSX.Element => {

    useEffect(() => {
    }, [])
    
    function returnToMatches() {
        setShowMatch(false)
    }

    return (
    <div>
    <button onClick={returnToMatches}>Return</button>
    </div>
  )
}

export default DisplayMatch