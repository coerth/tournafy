import React, { useState } from "react";
import { signUpInitialState } from "../../types/initialState";
import {useMutation } from '@apollo/client';
import { SIGN_UP } from "../../../graphql/mutations/signUpMutation";

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
    <div>
      <form onSubmit={signUp}>
        <h1>Sign Up</h1>
        <br />
        <div>
          <label>Fullname</label>
          <br />
          <input
            required
            type="text"
            name="name"
            value={user.name}
            placeholder="Fullname"
            onChange={(evt) => {
              setUser({ ...user, name: evt.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <br />
          <input
            required
            type="text"
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={(evt) => {
              setUser({ ...user, email: evt.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Gamertag</label>
          <br />
          <input
            required
            type="text"
            name="gamerTag"
            value={user.gamerTag}
            placeholder="Gamertag"
            onChange={(evt) => {
              setUser({ ...user, gamerTag: evt.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Phone</label>
          <br />
          <input
            required
            type="text"
            name="phone"
            value={user.phone}
            placeholder="Password"
            onChange={(evt) => {
              setUser({ ...user, phone: parseInt(evt.target.value) });
            }}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <input
            required
            type="text"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={(evt) => {
              setUser({ ...user, password: evt.target.value });
            }}
          />
        </div>
        <br />
        <div>
          <label>Confirm Password</label>
          <br />
          <input
            required
            type="text"
            name="confirmPassword"
            value={user.confirmPassword}
            placeholder="Confirm Password"
            onChange={(evt) => {
              setUser({ ...user, confirmPassword: evt.target.value });
            }}
          />
        </div>
        <br />
        <button type="submit" value="Sign Up">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
