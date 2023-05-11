import React, { useState } from "react";
import { logInInitialState } from "../../types/initialState";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../../../graphql/mutations/logInMutation";
import { log } from "console";
import { loggedInPlayerVar } from "../../client/cache";

const LogIn = () => {
  const [logIn, setLogIn] = useState(logInInitialState);

  const [mutateFunction, { data, loading, error }] = useMutation(LOG_IN, {
    //refetchQueries: [GET_PLAYERS]
  }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
  if (loading) return <>'Submitting...'</>;
  if (error) return <>`Submission error! ${error.message}`</>;
  if (data && data != undefined)
  {
    localStorage.setItem("auth:token", data.sign_in.token);
    localStorage.setItem("player", JSON.stringify(data.sign_in.player))
  } 
    

  const signIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutateFunction({ variables: { input: logIn } });
  };

  return (
    <div>
      <form onSubmit={signIn}>
   
          <label >Email: </label>
          <input
            type="text"
            name="email"
            value={logIn.email}
            onChange={(evt) => {
              setLogIn({ ...logIn, email: evt.target.value });
            }}
          />
     
          <label>Password: </label>
          <input
            type="text"
            name="password"
            value={logIn.password}
            onChange={(evt) => {
              setLogIn({ ...logIn, password: evt.target.value });
            }}
          />
      <button type="submit" value="Log In">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
