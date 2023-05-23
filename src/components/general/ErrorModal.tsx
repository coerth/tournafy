import "react-activity/dist/library.css";
import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import { ApolloError } from "@apollo/client";

type Props = {
  error: ApolloError
}

const ErrorModal:React.FC<Props> = ({error}): JSX.Element => {
    const { isOpen, toggle} = useModal();

    console.log(error.message)
  return (
    <div>
        <div onClick={toggle}>            
            <Modal isOpen={isOpen} toggle={toggle} children={error.message} />
        </div>
    
    </div>
  )
}

export default ErrorModal