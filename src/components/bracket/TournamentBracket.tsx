import React, { useEffect, useState } from "react";
import "../../styles/Bracket.css";
import { Match, Tournament } from "../../types/types";
import { GET_MATCHES, GET_TOURNAMENTS, GET_TOURNAMENT_MATCH } from "../../../graphql/query";
import { useMutation, useQuery } from "@apollo/client";
import { bracketInitialState } from "../../types/initialState";
import MatchBracket from "./MatchBracket";
import StageBracket from ".//StageBracket";
import { UPDATE_MATCH } from "../../../graphql/mutations/matchMutation";

type Props = {
  matches: Match[] | undefined;
};

const TournamentBracket:React.FC<Props> = ({matches}): JSX.Element => {
  const [bracket, setBracket] = useState(bracketInitialState)

  useEffect(() => {
  if(matches)
  {

  convertMatchesToHashMap(matches)
  }

  }, [matches])

  const [mutateFunction, {
    loading: mutationLoding,
    error: mutationError,
    data: mutationData } ] = useMutation(UPDATE_MATCH,{
    refetchQueries: [GET_TOURNAMENTS, GET_MATCHES]
});
  
  if (!matches) return <p>No Bracket yet...</p>

   function convertMatchesToHashMap(matches: Match[]) {
      let newBracket = new Map<number, Match[]>()

      matches.forEach( match => {

        if (newBracket.has(match.stage))
        {
          
          newBracket.get(match.stage)?.push(match)
        }
        else
        {
          newBracket.set(match.stage, [match])
        }
      } )

     setBracket(newBracket)
   }  

   function advanceTeamToNextStage (matches: Match[], stage: number) {
    let winnerArray = [];

    for(const match of matches){
      winnerArray.push(match.winner)
    }

    if(stage != 1){
      let nextStageMatches = bracket.get(stage-1);
      if(nextStageMatches){
      for(let match of nextStageMatches!){
        if(match.teams?.length != 2){
          mutateFunction({
            variables: {
              updateMatchId: match._id,
              input: {location: match.location ? match.location : "", stage: match.stage, teams: [winnerArray[0]!._id, winnerArray[1]!._id]}
            },
          });
          winnerArray.splice(0,2)
        }
      }
    }
  }
  }


  return (
    <div>
    { matches &&
    <div className="bracket">

      {[...bracket.keys()].map( key => {
        console.log(key)
     return  <StageBracket stage={key} matches={bracket.get(key) ? bracket.get(key) : []} advanceTeamToNextStage={advanceTeamToNextStage} />
      })
      }
    </div>
    }
    </div>
  );
};

export default TournamentBracket;
