import axios from "axios"
import { useEffect } from "react"


const testAPI = async () => {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response);
    }
    catch(error) {
        console.log(error)
    }
}

function App() {

  useEffect(() => {
    testAPI();
  }, []);

  return (
    <>
      <div style={{
            width: "100%", 
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem"
      }}>
        موفق باشید
      </div>
    </>
  )
}

export default App
