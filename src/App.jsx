import './App.css'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        {routes.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            name={item.name}
            element={item.element}
          />
        ))}
      </Routes>
      <Footer />
    </>
  )
}

export default App
