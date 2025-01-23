import { useState, useEffect } from 'react';
import Informacion from './components/Informacion';

// Definir la estructura de los datos que se recibirán
interface User {
  id: number;
  name: string;
  lastName: string;
}

function App() {
  const [data, setData] = useState<User[]>([]); // Definir el tipo de `data` como un array de `User`

  const getData = async () => {
    const response = await fetch("http://localhost:3000/api/usuarios");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Informacion data={data} />
    </>
  );
}

export default App;
