import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { store } from 'src/redux'

import App from './App'

import GlobalStyle from './styles/globals'

const client = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={client}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
)
