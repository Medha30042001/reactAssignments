import { useContext } from "react"
import Component5 from "./Component5"
import { AppContext } from "../context/AppContext"

const Component4 = () => {

    const {c, d} = useContext(AppContext);

  return (
    <>
    <h4>This is a prob c: {c}</h4>
    <h4>This is a prob d: {d}</h4>
    <Component5 />
    </>
  )
}

export default Component4;

//c, d