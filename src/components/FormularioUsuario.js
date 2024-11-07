
// Paso 1: Las importaciones
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


// Paso 2: Crear la funcion con el mismo nombre del archivo y determinar si recibe parametros o no
function FormularioUsuario(){

    const formik = useFormik({

        // Paso 1: Campos de nuestro formulario con valores iniciales
        initialValues: {
            nombre: "",
            email: "",
            password: ""
        },

        // Paso 2: Validaciones de nuestro formulario
        validationSchema: Yup.object({
            nombre: Yup.string().min(2, "El nombre no cumple con tener al menos 2 carecters").required("Requerido porquesi"),
            email: Yup.string().email("Formato email invalido").required("Requerido"),
            password: Yup.string().min(8, "La contraseña debe tener al menos 8 carecteres")
        }),

        // Paso 3: onSubmit (comprobacion)
        onSubmit: (values) => {
            alert("Nombre: ${values.nombre}, Email: ${values.email}")
        }
    });

    // Paso 2.1: Retorno de los tags de html
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input
                id="nombre"
                name="nombre"
                type="text"

                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
            />

            {formik.touched.nombre && formik.errors.nombre ? (
                <div style={{color: 'red'}}>{formik.errors.nombre}</div>
            ) : null}


            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"

                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
                <div style={{color: 'red'}}>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"

                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password ? (
                <div style={{color: 'red'}}>{formik.errors.password}</div>
            ) : null}


            <button type="submit">Enviar</button>

        </form>


    );
}


// Paso 3:
export default FormularioUsuario;







