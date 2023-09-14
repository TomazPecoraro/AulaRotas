import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
export default App
