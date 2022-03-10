import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, updateUsersList] = useState([]);
  const addUser = (user) => {
    updateUsersList((prevState) => {
      return [user, ...prevState];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUser} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
