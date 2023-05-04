import React, { useEffect, useState } from "react";
import AddPlayer from "../player/AddPlayer";
import AddTeam from "../team/AddTeam";
import AddTournament from "../tournament/AddTournament";

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
      </div>
    </div>
  );
};

export default Adminpage;
