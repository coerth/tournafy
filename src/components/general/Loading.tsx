import {Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Loading = () => {
  return (
    <div className='loading_overlay'>
    <div className='loading'>
        <Spinner size={50}/>
    </div>
    </div>
  )
}

export default Loading