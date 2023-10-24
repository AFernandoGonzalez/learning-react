
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilteredProvider } from './context/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilteredProvider>
    <App />
  </FilteredProvider>,
)
