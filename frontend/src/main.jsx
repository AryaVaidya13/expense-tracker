import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>
  </StrictMode>,
)
