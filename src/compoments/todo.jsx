import { useState } from "react";
import AddUser from "./addUser";
import UserList from "./useList";

function Todo() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-16">Todo App</h1>

      <div className="mx-auto container w-[50%] mt-8">
        <AddUser addUser={addUser} />
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </>
  );
}

export default Todo;
