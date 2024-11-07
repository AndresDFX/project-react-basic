import React, {useState, useEffect} from "react";
import axios from "axios";


function Peticiones(){
    //Variable de estado y manejador de estado de las peticiones GET
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch( error => {
                setError("Hubo un error al cargar los datos");
                setLoading(false);
            });    
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>

    const handleAddUser = async() =>{
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users",{
                name: "Nuevo usuario",
                email: "test@email.com"
            });
            console.log("Usuario creado", response.data);
            setData(prevData => [...prevData, response.data]);

        } catch(error){
            console.log("Error al crear el usuario", error);
            setError("No se puedo agregar usuario");
        }
    } 
    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {data.map( user => (
                    <li key={user.id}>{user.name} - {user.email}</li>    
                ))}
            </ul>
            <button onClick={handleAddUser}>Agregar usuario</button>
        </div>

    )

}


export default Peticiones;