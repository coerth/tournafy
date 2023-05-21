import React from 'react'
import { render } from "react-dom";

import { Dots, Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Loading = () => {
  return (
    <div>
        <Spinner/>
    </div>
  )
}

export default Loading