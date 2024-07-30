import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import Puzzle from './pages/Puzzle'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/memorygame',
    element: <Puzzle />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
