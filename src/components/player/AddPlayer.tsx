import React from 'react'
import { useState } from 'react';
import { playerInitialState } from '../../types/initialState';
import { CREATE_PLAYER } from '../../../graphql/mutations/playerMutation';
import {useMutation } from '@apollo/client';
import { GET_PLAYERS } from '../../../graphql/query';


const AddPlayer = () => {
    const [player, setPlayer] = useState(playerInitialState);

    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_PLAYER,{
        //refetchQueries: [GET_PLAYERS]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const createNewPlayer = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { input: player }}); 
    }
  return (
    <div>
        <form onSubmit={createNewPlayer}>
          <h1>Add Player</h1>
        <br/>
        <label>
        <input required type="text" name="name" placeholder='name' value={player.name} onChange={(evt)=>{setPlayer({...player, name:evt.target.value})}}/>
        </label>
        <br/>
        <label>
        <input required type="text" name="email" placeholder='email' value={player.email} onChange={(evt)=>{setPlayer({...player, email:evt.target.value})}}/>
        </label>
        <br/>
        <label>
        <input required type="text" name="gamerTag" placeholder='gamerTag' value={player.gamerTag} onChange={(evt)=>{setPlayer({...player, gamerTag:evt.target.value})}}/>
        </label>
        <br/>
        <label>
        <input type="number" name="phone" placeholder='phone' value={player.phone} onChange={(evt)=>{setPlayer({...player, phone: parseInt(evt.target.value) })}}/>
        </label>
        <br />
        <input type="submit" value="Add new Player" />
    </form>
    </div>
  )
}

export default AddPlayer