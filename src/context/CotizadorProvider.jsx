import { createContext } from 'react'

// para crear el context
const CotizadorContext = createContext()

// esta es la funcion PROVIDER
// EL PROVIDER es donde se define el state donde se tienen los effects y algunas funciones
// EL PROVIDER es la fuente de los datos. Es una fiuncion normal
const CotizadorProvider = ({children}) => {

  return(
    <CotizadorContext.Provider
      value={{}}
    >
      {children}
    </CotizadorContext.Provider>
    )
}

export {
  CotizadorProvider
}
export default CotizadorContext