
import './App.css';
import { useState, useEffect } from "react"
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getAllUsernames() {
      try {
        const users = await axios.get("http://localhost:4000/api/user")
        console.log(users.data)
        setUsers(users.data);
      }
      catch (error) {
        console.log(error)
      }
    }
    getAllUsernames()
  }, [])
  return (
    <>
      <h1>Kashaf Abdullah</h1>
      <h4> WEBSTAR ROADMAP TO MERNSTACK ASSIGNMENT</h4>
      {
        users.map((user, i) => {
          return (
            //all names in list order
            <ul>
              <li >Name:{user.name}<br></br></li>
            </ul>
          )
        })
      }

    </>
  );
}

export default App;
