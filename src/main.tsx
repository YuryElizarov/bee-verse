import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './styles/reset.scss'
import './styles/global.scss'
import Providers from "./Providers.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App/>
    </Providers>
  </StrictMode>,
)
