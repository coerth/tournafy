import React, { useState } from "react";
import { logInInitialState } from "../../types/initialState";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../../../graphql/mutations/logInMutation";
import { useNavigate } from "react-router-dom";
import Modal from '../Modal'
import useModal from '../hooks/useModal'
import SignUp from "./SignUp";
import '../../styles/Modal.css'



const LogIn = () => {
  const { isOpen, toggle } = useModal();

  const navigate = useNavigate();
  
  const [logIn, setLogIn] = useState(logInInitialState);

  const [mutateFunction, { data, loading, error }] = useMutation(LOG_IN, {
    //refetchQueries: [GET_PLAYERS]
  }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
  if (loading) return <>'Submitting...'</>;
  if (error) return <>`Submission error! ${error.message}`</>;
  if (data) console.log(data.sign_in.player);

  const signIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutateFunction({ variables: { input: logIn } });
  };

  return (
    <>
    <div className="login-container">
      <form onSubmit={signIn}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={logIn.email}
            onChange={(evt) => {
              setLogIn({ ...logIn, email: evt.target.value });
            }}
          />
     
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={logIn.password}
            onChange={(evt) => {
              setLogIn({ ...logIn, password: evt.target.value });
            }}
          />
        <button type="submit" value="Log In">Log In</button>
      </form>
          <button onClick={toggle}>Sign Up</button>
          <Modal isOpen={isOpen} toggle={toggle} children={<SignUp/>} />
    </div>
    </>
  );
};

export default LogIn;
