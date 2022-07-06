
import React, { useEffect, useState } from "react";
import Card from "./components/Card"

const App = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('https://api.github.com/users/sadanandpai')
      const data = await res.json()
      setUser(data)
    }
    fetchUser()
  }, [])

  return (
    <div className="bg-slate-200 h-screen pt-14">
      <Card user={user} />
    </div>
  )
};

export default App;
