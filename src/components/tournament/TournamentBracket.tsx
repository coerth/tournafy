import React, { useEffect, useState } from "react";
import "../../styles/Bracket.css";
import { Match, Tournament } from "../../types/types";
import { GET_TOURNAMENT_MATCH } from "../../../graphql/query";
import { useQuery } from "@apollo/client";
import { bracketInitialState } from "../../types/initialState";
import MatchBracket from "../match/MatchBracket";
import StageBracket from "../match/StageBracket";

type Props = {
  tournament: Tournament[];
};

const TournamentBracket= () => {
  const [bracket, setBracket] = useState(bracketInitialState)

  const { loading, error, data } = useQuery(GET_TOURNAMENT_MATCH, {
    variables: {tournamentId: "6461f1fc28858a4ca6532574"}
  });

  useEffect(() => {
  if(data)
  {

  convertMatchesToHashMap(data.tournament.matches)
  }

  }, [loading])
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>; 

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
      console.log(newBracket)

      let reverseMap = new Map([...newBracket.entries()].reverse());
      console.log(reverseMap)
      setBracket(reverseMap)
   }  


  return (
    <div>
    { !loading &&
    <div className="bracket">

      {bracket.forEach((value: Match[], key: number) => {
        return <StageBracket matches={value ? value : []} />
});
      }

      

      <StageBracket matches={bracket.get(3) ? bracket.get(3) : []} />
      <StageBracket matches={bracket.get(2) ? bracket.get(2) : []} />
      <StageBracket matches={bracket.get(1) ? bracket.get(1) : []} />
    </div>
    }
    </div>
  );
};

export default TournamentBracket;
