import axios from "axios";
import { useEffect, useState } from "react";

import "./styles/global.css";

interface Movie {
  nome: string;
  id: number;
  ano: number;
}

export default function App() {
  const [users, setUsers] = useState<object[]>([]);

  function api() {
    axios
      .get("http://localhost:3001/movies")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      {users.map((movie: Movie) => {
        return (
          <div className="movie" key={movie.id}>
            <p>{movie.nome}</p>
            <p>{movie.ano}</p>
          </div>
        );
      })}
    </div>
  );
}
