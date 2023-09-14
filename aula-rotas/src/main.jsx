import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './assets/Home/index.jsx'
import Produtos from './assets/Produtos/index.jsx'
import Error from './assets/Error/index.jsx'
import EditarProdutos from './assets/EditarProdutos/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const router = createBrowserRouter([
{
  path:"/",
  element: <App/>,
  errorElement: <Error/>,
  children:[
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/produtos",
      element: <Produtos/>
    },
    {
      path: "/produtos/editar/:id",
      element: <EditarProdutos/>
    }
  ]
}
])
