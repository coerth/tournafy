import React, { useState } from "react";
import { logInInitialState } from "../../types/initialState";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../../../graphql/mutations/logInMutation";
import Modal from "../general/Modal";
import useModal from "../../hooks/useModal";
import SignUp from "./SignUp";
import "../../styles/Modal.css";
import { isLoggedInVar, loggedInPlayerVar, hasAccessVar } from "../../client/cache";
import ErrorModal from "../general/ErrorModal";

const LogIn = () => {
  const { isOpen, toggle } = useModal();

  const [logIn, setLogIn] = useState(logInInitialState);

  const [mutateFunction, { data, loading, error }] = useMutation(LOG_IN, 
    {onCompleted(data) {
      localStorage.setItem("auth:token", data.sign_in.token);
      localStorage.setItem("player", JSON.stringify(data.sign_in.player));
      hasAccessVar(data.sign_in.adminAccess)
      isLoggedInVar(true);
      loggedInPlayerVar(data.sign_in.player);
      console.log(`fra Graghql: ${data.sign_in.adminAccess}  fra cache: ${hasAccessVar()}`)

  }}); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
  if (loading) return <>'Submitting...'</>;
  //if (error) return <ErrorModal error={error}/>
  if (error) return <p className="p-error">Submission error! ${error.message}</p>;
  if (data && data.sign_in.token && data.sign_in.player) {
    localStorage.setItem("auth:token", data.sign_in.token);
    localStorage.setItem("player", JSON.stringify(data.sign_in.player));
    hasAccessVar(data.sign_in.adminAccess)
    isLoggedInVar(true);
    loggedInPlayerVar(data.sign_in.player);
    console.log(hasAccessVar())
  }
  const signIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutateFunction({ variables: { input: logIn } });
  };

  return (
    <>
    <div>
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
          <button type="submit" value="Log In">
            Log In
          </button>
        </form>
      </div >
      <div className="login-container">
          <button onClick={toggle}>Sign Up</button>
          <Modal isOpen={isOpen} toggle={toggle} children={<SignUp />} />
          </div>
      </div>
    </>
  );
};

export default LogIn;
