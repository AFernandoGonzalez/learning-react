import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './src/App'
import "./style.css"
import { ThemeProvider } from './src/context/switcher'

ReactDOM.createRoot(document.getElementById('app')).render(
  // <ThemeProvider>
    <App />
  //</ThemeProvider>, 
)