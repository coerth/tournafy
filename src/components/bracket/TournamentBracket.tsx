import React, { useEffect, useState } from "react";
import "../../styles/Bracket.css";
import { Match } from "../../types/types";
import { GET_MATCHES, GET_TOURNAMENTS, GET_TOURNAMENT_MATCH } from "../../../graphql/query";
import { useMutation, useQuery } from "@apollo/client";
import { bracketInitialState } from "../../types/initialState";
import StageBracket from ".//StageBracket";
import { UPDATE_MATCH } from "../../../graphql/mutations/matchMutation";
import '../../styles/Bracket.css'
import Loading from "../general/Loading";

type Props = {
  matches: Match[];
  returnButton: Function
};

const TournamentBracket:React.FC<Props> = ({matches, returnButton}): JSX.Element => {
  const [bracket, setBracket] = useState(bracketInitialState)

  const [mutateFunction, {
    loading: mutationLoading,
    error: mutationError,
    data: mutationData } ] = useMutation(UPDATE_MATCH,{
    refetchQueries: [GET_TOURNAMENTS, GET_MATCHES]
});
  useEffect(() => {
    
  if(matches)
  {
  convertMatchesToHashMap(matches)
  }

  }, [matches, mutationData])


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

   function advanceTeamToNextStage (match: Match, stage: number) {

    let teamPlaced = false

    if(stage != 1){
      let nextStageMatches = bracket.get(stage-1);
      for(let nextMatch of nextStageMatches!){
        if(teamPlaced == false && nextMatch.teams?.length != 2){
          
          let teamIdArray: string[] = []
          nextMatch.teams?.forEach(team => teamIdArray.push(team._id!))
          teamIdArray.push(match.winner?._id!)

          mutateFunction({
            variables: {
              updateMatchId: nextMatch._id,
              input: {location: nextMatch.location ? nextMatch.location : "", stage: nextMatch.stage, teams: teamIdArray}
            },
          });

          teamPlaced = true
      }
    }
  }
  }

if(mutationLoading) return <Loading/>

  return (
    <div className="outer-bracket-div">
      {!matches || matches.length == 0 &&
       <p>No Bracket yet...</p>
       }

    { matches!.length > 0 &&
    <div className="bracket">

      {[...bracket.keys()].map( key => {
     return  <StageBracket stage={key} matches={bracket.get(key) ? bracket.get(key) : []} advanceTeamToNextStage={advanceTeamToNextStage} />
      })
      }
    </div>
    }
    <button className='return-button' onClick={() =>returnButton()}>Return</button>
    </div>
  );
};

export default TournamentBracket;
