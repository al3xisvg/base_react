import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from 'src/pages/home'

import { AppStyle } from 'src/styles/app'

const App = () => {
  return (
    <AppStyle>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AppStyle>
  )
}

export default App
