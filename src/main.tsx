import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import Layout from './shared/Layout/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './entities/store.ts'
import './app/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </Provider>

)
