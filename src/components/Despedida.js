import React, {useState} from "react";


function Despedida(){

    const [mensaje, setMensaje] = useState("");


    // Funcion para determinar el saludo inicial basado en la hora del dia
    const obtenerSaludo = () => {
        const hora = new Date().getHours();

        if (hora < 12){
            return "¡Gracias por usar React, que tengas un excelente día!";
        }else if (hora < 18){
            return "¡Gracias por usar React, que tengas una buena tarde!";
        }
        else{
            return "¡Gracias por usar React, que tengas una buena noche!";
        }
    };

    //Inicial el mensaje con el saludo adecuado
    useState(() => {
        setMensaje(obtenerSaludo());
      }, []);


    //Funciones para cambiar el mensaje manualmente
    const cambiarAManana = () => setMensaje("¡Gracias por usar React, que tengas un excelente día!");
    const cambiarATarde = () => setMensaje("¡Gracias por usar React, que tengas una buena tarde!");
    const cambiarNoche = () => setMensaje("¡Gracias por usar React, que tengas una buena noche!");
    
    return (
        <div>
            <p>{mensaje}</p>
            <button onClick={cambiarAManana}> Cambiar a mañana </button>
            <button onClick={cambiarATarde}> Cambiar a tarde </button>
            <button onClick={cambiarNoche}> Cambiar a noche </button>
        </div>
    );

}

export default Despedida;