import { useState, createContext } from 'react'

// para crear el context es una funcion
const CotizadorContext = createContext()


// esta es la funcion PROVIDER
// EL PROVIDER es donde se define el state donde se tienen los effects y algunas funciones
// EL PROVIDER es la fuente de los datos. Es una fiuncion normal
const CotizadorProvider = ({children}) => {

  const [modal, setModal] = useState(false)

  const cambiarState = () => {
    setModal(!modal)
  }

  return(
    <CotizadorContext.Provider
      value={{
        modal,
        cambiarState
      }}
    >
      {children} {/* se refier a todos los componentes rodeados por el provider, este ha sido llamado en app.jsx*/}
    </CotizadorContext.Provider>
    )
}

export {
  CotizadorProvider
}
export default CotizadorContext