import { createContext } from "react";

const CotizadorContext = createContext();


const CotizadorProvider = ({children}) => {

    const hola = "Hola Mundo"

    const fnHolaMundo = () => {
        console.log("Hola mundo desde la funcion");
    }

    return (
        <CotizadorContext.Provider
            value={{
                hola,
                fnHolaMundo
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext


