import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Component6 = () => {

    const {e} = useContext(AppContext);

  return (
    <>
    <h4>This is a prob e: {e}</h4>
    </>
  )
}

export default Component6;

//e