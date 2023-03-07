import { useState, createContext } from 'react'

// para crear el context es una funcion
const CotizadorContext = createContext()


// esta es la funcion PROVIDER
// EL PROVIDER es donde se define el state donde se tienen los effects y algunas funciones
// EL PROVIDER es la fuente de los datos. Es una fiuncion normal
const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const handleChangeDatos = e => {
    // console.log(e)
    console.log(e.target.name)
    console.log(e.target.value)
    setDatos({
      // primero hacemos una copia del state anterior
      ...datos,
      [e.target.name] : e.target.value
      // tienen q estar entre corchegtes pq no son llaves y valores validos para un objeto
    })
  }

  return(
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos
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