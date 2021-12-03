import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

function App() {
  const [list, addList] = useState([]);

  const addListHandler = (uName, uAge) => {
    addList((prevuserlist) => {
      return [...prevuserlist, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser newUser={addListHandler} />
      <UserList users={list} />
    </div>
  );
}

export default App;
