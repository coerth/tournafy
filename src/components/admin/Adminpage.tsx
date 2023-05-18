import React, { useEffect, useState } from "react";
import AddPlayer from "../player/AddPlayer";
import AddTeam from "../team/AddTeam";
import AddTournament from "../tournament/AddTournament";
import AddTeamToTournament from "../tournament/AddTeamToTournament";

const Adminpage = () => {
  return (
    <div>
      <div className="container">
        <div className="item">
          <AddPlayer />
        </div>
        <div className="item">
          <AddTeam />
        </div>
        <div className="item">
          <AddTournament />
        </div>
        <div className="item">
          <AddTeamToTournament />
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
