import { useState, createContext } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

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
  const [error, setError] = useState('')
  const [resultado, setResultado] = useState(0)

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

  const cotizarSeguro = () => {
    console.log('cotizando....')

    // La base
    let resultado = 2000

    // Obtener la diferencia de aṉos
    // console.log(datos.year)
    const diferencia = obtenerDiferenciaYear(datos.year)
    // console.log(diferencia)

    // a la base hay q restarle un 3% por cada aṉo
    resultado -= ((diferencia * 3) * resultado) / 100

    // Americano base + 15%
    // Europeo  base + 30%
    // Asiatico base + 5%
    resultado *= calcularMarca(datos.marca)
    // console.log(resultado)

    // Basico base + 20%
    // Completo base + 50%
    resultado *= calcularPlan(datos.plan)
    // console.log(resultado)

    // Formatear Dinero
    resultado = formatearDinero(resultado)
    // console.log(resultado)
    setResultado(resultado)
  }

  return(
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro
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