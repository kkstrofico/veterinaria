// Definir la estructura de las props
interface User {
    id: number;
    name: string;
    lastName: string;
}

interface Props {
  data: User[]; // El componente recibe `data` como un array de `User`
}

function Informacion({ data }: Props) {
    return (
    <div>
        {data.map((user) => (
        <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.lastName}</h2>
        </div>
        ))}
    </div>
    );
}

export default Informacion;
