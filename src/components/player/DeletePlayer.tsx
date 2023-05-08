import React from 'react'
import {useMutation } from '@apollo/client';
import { useState } from 'react';
import { DELETE_PLAYER } from '../../../graphql/mutations/playerMutation';

const DeletePlayer = () => {
    const [ID, setID] = useState("")

    const [mutateFunction, { data, loading, error }] = useMutation(DELETE_PLAYER,{
        //refetchQueries: [GET_PLAYERS]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const deletePlayer = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { deletePlayerId: ID }}); 
    }

  return (
    <div>
        <form onSubmit={deletePlayer}>
          <h1>Delete Player</h1>
        <br/>
        <label>
        <input required type="text" name="id" placeholder='id' value={ID} onChange={(evt)=>{setID(evt.target.value)}}/>
        </label>
        <br/>
        
        <input type="submit" value="delete Player" />
    </form>

    <div>
        {data &&
        <h1>Player Deleted!</h1>
        }
    </div>
    </div>
  )
}

export default DeletePlayer