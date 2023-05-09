import React, { useEffect, useState } from "react";
import AddPlayer from "../player/AddPlayer";
import AddTeam from "../team/AddTeam";
import AddTournament from "../tournament/AddTournament";
import DeletePlayer from "../player/DeletePlayer";

const Adminpage = () => {
  return (
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
          <DeletePlayer/>
        </div>
      
    </div>
  );
};

export default Adminpage;
