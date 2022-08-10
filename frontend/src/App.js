import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import HomeProtected from "./Screens/Auth/Home";
import HomeDefault from "./Screens/Default/Home";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function verifyToken() {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          setAuth(true);
          const user = localStorage.getItem("user_cred");
          if(!user){
            window.location.href = "/login"
            return localStorage.clear()
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    verifyToken();
  }, []);

  return (
    <div className="App">{auth ? <HomeProtected /> : <HomeDefault />}</div>
  );
}

export default App;
