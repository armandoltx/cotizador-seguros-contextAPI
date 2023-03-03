import { CotizadorProvider } from './context/CotizadorProvider'
import AppSeguro from "./compoments/AppSeguro"

function App() {

  return (
    // los datos del provider van a estar disponibles en cualquier componente al que rodee.
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
