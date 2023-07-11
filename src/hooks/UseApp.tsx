import { useContext } from "react"
import { AppContext } from "@/context/AppContext";


const UseApp = () => {
  return useContext(AppContext);
}

export default UseApp;