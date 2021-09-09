import React, { useState } from "react";
import AddUsers from "./components/Users/UserInput/AddUsers";
import UsersList from "./components/Users/UserList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };

  const deleteItemHandler = (userId) => {
    setUsersList((prevUsersList) => {
      const updatedList = prevUsersList.filter((user) => user.id !== userId);
      return updatedList;
    });
  };

  return (
    <>
      <AddUsers onAddUsers={addUserHandler} />
      <UsersList users={usersList} onDeleteItem={deleteItemHandler} />
    </>
  );
}

export default App;
