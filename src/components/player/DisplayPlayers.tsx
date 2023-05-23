import { useMutation } from '@apollo/client';
import { DELETE_PLAYER } from '../../../graphql/mutations/playerMutation';
import {Player} from '../../types/types'
import Loading from '../general/Loading';
import { GET_PLAYERS } from '../../../graphql/query';
import { useState } from 'react';
import { hasAccessVar } from '../../client/cache';

type Props = {
    players: Player[],
    removePlayer: Function
}

const DisplayPlayers:React.FC<Props> = ({players, removePlayer}): JSX.Element => {
  
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gamer Tag</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
            {players?.map((player: Player) => (
                    <tr key={player._id}>
                        <td>{player.name}</td>
                        <td>{player.gamerTag}</td>
                        <td>{player?.email}</td>
                        <td>{player?.phone}</td>
                        {
                            hasAccessVar() &&
                        <td><button onClick={() => removePlayer(player._id!)}>Remove</button></td>
                        }
                    </tr>
            ))}
        
                </tbody>
            </table>
        </div>
   )
}

export default DisplayPlayers