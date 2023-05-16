import React, { useEffect, useState } from "react";
import "../../styles/Bracket.css";
import { Match } from "../../types/types";
import { GET_TOURNAMENT_MATCH } from "../../../graphql/query";
import { useQuery } from "@apollo/client";

type Props = {
  match: Match[];
};

const TournamentBracket= () => {
    const { loading, error, data } = useQuery(GET_TOURNAMENT_MATCH, {
        variables: {tournamentId: "6461f1fc28858a4ca6532574"}
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>; 


  return (
    <div className="bracket">
      <div className="stage">
        {data.tournament.matches.map((match: Match) => {
            if(match.stage === 3){
            return (
            <div className="match" key={match._id}>
                <div className="team">{match.teams[0] ? match.teams[0].name : ""}</div>
                <div className="team">{match.teams[1] ? match.teams[1].name : ""}</div>
            </div>
            )
            }
        })}
      </div>
      <div className="stage">
      {data.tournament.matches.map((match: Match) => {
            if(match.stage === 2){
            return (
            <div className="match" key={match._id}>
                <div className="team">{match.teams[0] ? match.teams[0].name : "Stage not active"}</div>
                <div className="team">{match.teams[1] ? match.teams[1].name : "Stage not active"}</div>
            </div>
            )
            }
        })}
      </div>
      <div className="stage">
      {data.tournament.matches.map((match: Match) => {
            if(match.stage === 1){
            return (
            <div className="match" key={match._id}>
                <div className="team">{match.teams[0] ? match.teams[0].name : "Stage not active"}</div>
                <div className="team">{match.teams[1] ? match.teams[1].name : "Stage not active"}</div>
            </div>
            )
            }
        })}
      </div>
    </div>
  );
};

export default TournamentBracket;
