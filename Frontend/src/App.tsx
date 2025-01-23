import { useState, useEffect } from 'react';
import {InformacionNode,InformacionFazt} from './components/Informacion';

// Definir la estructura de los datos que se recibirán
interface User {
  id: number;
  name: string;
  lastName: string;
}

interface responseFazt{
  message:string;
  data:User[];
}


function App() {
  const [dataNode, setDataNode] = useState<User[]>([]); // Definir el tipo de `data` como un array de `User`

  const getDataNode = async () => {
    const responseNode = await fetch("http://localhost:3000/api/usuarios");
    const dataNode = await responseNode.json();
    setDataNode(dataNode);
  };
  useEffect(() => {
    getDataNode();
  }, []);


  const [dataFazt, setDataFazt]=useState<User[]>([]);
  const [messageFazt,setMessageFazt]=useState<string>("");
  const getDataFazt = async () => {
    const responseFazt = await fetch("http://127.0.0.1:8000/users");
    const dataFazt: responseFazt = await responseFazt.json();
    setDataFazt(dataFazt.data);
    setMessageFazt(dataFazt.message);
  };
  useEffect(() => {
    getDataFazt();
  }, []);


  


  return (
    <>
      <InformacionNode data={dataNode} />
      <InformacionFazt data={dataFazt} message={messageFazt}/>
    </>
  );
}

export default App;
