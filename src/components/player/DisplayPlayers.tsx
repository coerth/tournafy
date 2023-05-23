import { useMutation } from '@apollo/client';
import { DELETE_PLAYER } from '../../../graphql/mutations/playerMutation';
import {Player} from '../../types/types'
import Loading from '../general/Loading';
import { GET_PLAYERS } from '../../../graphql/query';
import { useState } from 'react';
import { hasAccessVar } from '../../client/cache';

const DisplayPlayers = ({players}: {players: Player[]}) => {
    const [ID, setID] = useState("")
    
    const [mutateFunction, { data, loading, error }] = useMutation(DELETE_PLAYER,{
        refetchQueries: [GET_PLAYERS]
    });
    if (loading) return <>'Submitting...' <Loading/></>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const deletePlayer = (playerId: string) => {
        console.log(playerId);
        setID(playerId);
        mutateFunction({variables: { deletePlayerId: playerId }}); 
    }
  
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
                        <td><button onClick={() => deletePlayer(player._id!)}>Delete</button></td>
                        }
                    </tr>
            ))}
        
                </tbody>
            </table>
        </div>
   )
}

export default DisplayPlayers