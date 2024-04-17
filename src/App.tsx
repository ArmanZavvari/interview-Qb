import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { Button } from "@mui/material";
import { changeTest } from "./features/testSlice/testSlice";



function App() {

  const dispatch = useAppDispatch()
  const test = useAppSelector(state => state.testSlice.test)


  return (
    <>
      <div style={{
            width: "100%", 
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            display: "flex",
            flexDirection : 'column'
      }}>
        <p>موفق باشید</p>
        <div style={{display : 'flex' ,flexDirection : 'column'}}>
          <p>{test}</p>
          <Button onClick={() => dispatch(changeTest("initial Text Changed"))}>click to change text!</Button>
        </div>
      </div>
    </>
  )
}

export default App





