import axios from "axios"
import { useEffect } from "react"
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { Button } from "@mui/material";
import { changeTest } from "./features/testSlice/testSlice";


const testAPI = async () => {
    try {
        let response = await axios.get("http://rezayari.ir:5050/Questionnaire/GetQuestionnaire");
        console.log(response);
    }
    catch(error) {
        console.log(error)
    }
}

function App() {

  const dispatch = useAppDispatch()
  const test = useAppSelector(state => state.testSlice.test)

  useEffect(() => {
    testAPI();
  }, []);

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
          <Button onClick={() => dispatch(changeTest("works"))}>change text</Button>
        </div>
      </div>
    </>
  )
}

export default App



enum QuestionType {
  PhoneNumber = 1,
  SingleSelectDropDown,
  SimpleText,
}

