import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import Layout from './shared/Layout/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import './app/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
)
