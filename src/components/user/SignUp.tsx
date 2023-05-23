import React, { useState } from "react";
import { signUpInitialState } from "../../types/initialState";
import {useMutation } from '@apollo/client';
import { SIGN_UP } from "../../../graphql/mutations/signUpMutation";
import '../../styles/SignUp.css'

const SignUp = () => {
  const [user, setUser] = useState(signUpInitialState);

  const [mutateFunction, { data, loading, error }] = useMutation(
    SIGN_UP,
    {
      //refetchQueries: [GET_PLAYERS]
    }
  ); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
  if (loading) return <>'Submitting...'</>;
  if (error) return <>`Submission error! ${error.message}`</>;

  const signUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutateFunction({ variables: { input: user } });
  };

  return (
    <div className="sign-up-form">
      <form className="form" onSubmit={signUp}>
        <h1 className="signup-h1">Sign Up</h1>
       
        <div className="inputContainer">
          <label className="label">Fullname</label>
      
          <input
            required
            type="text"
            name="name"
            className="input"
            value={user.name}
            placeholder="Fullname"
            onChange={(evt) => {
              setUser({ ...user, name: evt.target.value });
            }}
          />
        </div>
     
        <div className="inputContainer">
          <label className="label">Email</label>
        
          <input
            required
            type="text"
            name="email"
            className="input"
            value={user.email}
            placeholder="Email"
            onChange={(evt) => {
              setUser({ ...user, email: evt.target.value });
            }}
          />
        </div>
      
        <div className="inputContainer">
          <label className="label">Gamertag</label>
        
          <input
            required
            type="text"
            name="gamerTag"
            className="input"
            value={user.gamerTag}
            placeholder="Gamertag"
            onChange={(evt) => {
              setUser({ ...user, gamerTag: evt.target.value });
            }}
          />
        </div>
     
        <div className="inputContainer">
          <label className="label">Phone</label>
        
          <input
            required
            type="text"
            name="phone"
            className="input"
            value={user.phone}
            placeholder="Password"
            onChange={(evt) => {
              setUser({ ...user, phone: parseInt(evt.target.value) });
            }}
          />
        </div>
      
        <div className="inputContainer">
          <label className="label">Password</label>
       
          <input
            required
            type="password"
            name="password"
            className="input"
            value={user.password}
            placeholder="Password"
            onChange={(evt) => {
              setUser({ ...user, password: evt.target.value });
            }}
          />
        </div>
     
        <div className="inputContainer">
          <label className="label">Confirm Password</label>
        
          <input
            required
            type="password"
            name="confirmPassword"
            className="input"
            value={user.confirmPassword}
            placeholder="Confirm Password"
            onChange={(evt) => {
              setUser({ ...user, confirmPassword: evt.target.value });
            }}
          />
        </div>
        
        <button type="submit" value="Sign Up">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
