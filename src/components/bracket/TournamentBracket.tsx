import React, { useEffect, useState } from "react";
import "../../styles/Bracket.css";
import { Match, Tournament } from "../../types/types";
import { GET_TOURNAMENT_MATCH } from "../../../graphql/query";
import { useQuery } from "@apollo/client";
import { bracketInitialState } from "../../types/initialState";
import MatchBracket from "./MatchBracket";
import StageBracket from ".//StageBracket";

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


  return (
    <div>
    { matches &&
    <div className="bracket">

      {[...bracket.keys()].map( key => {
     return  <StageBracket key={key} matches={bracket.get(key) ? bracket.get(key) : []} />
      })
      }
    </div>
    }
    </div>
  );
};

export default TournamentBracket;
