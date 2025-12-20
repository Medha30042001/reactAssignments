import { useContext } from "react"
import Component4 from "./Component4"
import { AppContext } from "../context/AppContext"

const Component3 = () => {

    const {a, b} = useContext(AppContext);

  return (
    <>
    <h4>This is a prob a: {a}</h4>
    <h4>This is a prob b: {b}</h4>
    <Component4 />
    </>
  )
}

export default Component3;

// a, b