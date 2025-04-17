import { StrictMode, useEffect,useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Videoplay from './component/VideoPlayer/Videoplay.jsx'
import Main from './component/Main/Main.jsx'
import { ListProvider } from './context/listContext.js'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path=''element={<Main />} />
      <Route path=':id' element={<Videoplay/>} />
    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
