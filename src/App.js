import react from 'react'
import Home from './pages/Home'
import GlobalStyle from './components/GlobalStyle'
import {Route,Routes,useRoutes} from 'react-router-dom'
import Nav from './components/Nav'
const Roout=()=>{
  let el= useRoutes([
    { path: '/', element: <Home /> },
    { path: '/game/:id', element: <Home /> },
  ])
  return el
}
const App = () => {

  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <Roout>
        <Home />
      </Roout>
    </div>
  ) 
}

export default App
