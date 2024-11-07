import React, {createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [temaOscuro, setTemaOscuro] = useState(false);

    const toggleTema = () => {
        setTemaOscuro((prevTemaOscuro) => !prevTemaOscuro);
    };

    useEffect(() => {
        document.body.className = temaOscuro ? 'tema-oscuro' : 'tema-claro';
    }, [temaOscuro]);


    return (
        <ThemeContext.Provider value={{temaOscuro, toggleTema}}>
            {children}
        </ThemeContext.Provider>
    );

}

export function useTheme(){
    return useContext(ThemeContext);
}