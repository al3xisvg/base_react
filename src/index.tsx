import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { store } from 'src/redux'

import App from './App'

import GlobalStyle from './styles/globals'

const client = new QueryClient()

const element = document.getElementById('root')

const root = createRoot(element!)

root.render(
  <QueryClientProvider client={client}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
)
