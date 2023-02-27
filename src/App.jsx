import { BrowserRouter as Router} from 'react-router-dom'
// import { GlobalContext } from './context/GlobalContext'
import GlobalContext from './context/GlobalContext'
import Layout from './layout/Layout'
import Rutas from './routes/Rutas'

function App() {


  return (
    <>
      <Router>
        <GlobalContext>
            <Layout>
              <Rutas/>
            </Layout>
        </GlobalContext>
      </Router>
    </>
  )
}

export default App
