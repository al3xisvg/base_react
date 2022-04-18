import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

import HomePage from 'src/pages/home'

import { QNavbar } from 'src/components'

import { AppStyle } from 'src/styles/app'

const theme = createTheme({
  palette: {
    primary: {
      main: '#efefef',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <Router>
          <QNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </AppStyle>
    </ThemeProvider>
  )
}

export default App
