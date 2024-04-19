import 'moment/dist/locale/pt-br'
import './styles/global.css'

import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'

moment.locale('pt-br')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
