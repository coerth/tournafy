import React, { useEffect, useState } from 'react'
import {Player} from '../../utility/types'

type Props = {
    players: Player[]
}

const DisplayPlayers:React.FC<Props> = ({players}): JSX.Element => {
    
    useEffect(() => { 
    }, [])


    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gamer Tag</th>

                </tr>
            </thead>
            <tbody>
            {players?.map( (player) => {
        return(
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.gamerTag}</td>
            </tr>
        )
      } )}
            </tbody>
        </table>
    </div>
  )
}

export default DisplayPlayers