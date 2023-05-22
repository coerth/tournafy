import React from 'react'
import { Match } from '../../types/types'
import Modal from "../general/Modal";
import useModal from "../../hooks/useModal";
import { EditMatch } from '../match/EditMatch';


type Props = {
    match: Match;
  };

const MatchBracket:React.FC<Props> = ({match}): JSX.Element => {
    const { isOpen, toggle} = useModal();
    return (
        <div onClick={toggle} className="match" key={match._id}>
            <Modal isOpen={isOpen} toggle={toggle} children={<EditMatch  match={match} />} />
            <div className="team">{match.teams![0] ? match.teams![0].name : "Stage not active"}</div>
            <div className="team">{match.teams![1] ? match.teams![1].name : "Stage not active"}</div>
        </div>
        )
}

export default MatchBracket