import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  id: number
}

export default function App() {

  const [users, setUsers] = useState<object[]>([])

  function api() {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    api();
  }, []);

  return <div>
    {users.map((person: User) => {
      return <li key={person.id}>{person.name}</li>
    })}
  </div>;
}
