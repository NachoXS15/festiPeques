import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import MemoryRules from './pages/memory/MemoryRules'
import MemoryPlay from './pages/memory/MemoryPlay'
import QARules from './pages/qa/QARules'
import QAPlay from './pages/qa/QAPlay'
import PuzzleRules from './pages/puzzle/PuzzleRules'
import PuzzlePlay from './pages/puzzle/PuzzlePlay'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/memorygame-rules',
    element: <MemoryRules />
  },
  {
    path: '/memorygame-play',
    element: <MemoryPlay />
  },
  {
    path: '/qagame-rules',
    element: <QARules />
  },
  {
    path: '/qagame-play',
    element: <QAPlay />
  },
  {
    path: '/puzzlegame-rules',
    element: <PuzzleRules />
  },
  {
    path: '/puzzlegame-play',
    element: <PuzzlePlay />
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
