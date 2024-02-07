import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routers/'
import { CalculateProvider } from './store/calculate'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculateProvider>
      <RouterProvider router={router} />
    </CalculateProvider>
  </React.StrictMode>,
)