// Definir la estructura de las props
interface User {
    id: number;
    name: string;
    lastName: string;
}

interface Props {
    data: User[]; // El componente recibe `data` como un array de `User`
}

export function InformacionNode({ data }: Props) {
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
export function InformacionFazt({ data, message }: Props & { message: string }) {
    return (
    <div>
        <h1>{message}</h1>
        {data.map((user) => (
        <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.lastName}</h3>
        </div>
        ))}
    </div>
    );
}

