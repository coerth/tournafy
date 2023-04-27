import React, { useEffect, useState } from 'react'
import {GET_PLAYERS} from '../../../graphql/query'
import { useQuery} from '@apollo/client';
import {Player} from '../../types/types'

const DisplayPlayers = ({players}: {players: Player[]}) => {
    
  
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gamer Tag</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
            {players?.map((players: Player) => (
                    <tr key={players._id}>
                        <td>{players._id}</td>
                        <td>{players.name}</td>
                        <td>{players.gamerTag}</td>
                        <td>{players?.email}</td>
                        <td>{players?.phone}</td>
                    </tr>
            ))}
                </tbody>
            </table>
        </div>
   )
}

export default DisplayPlayers