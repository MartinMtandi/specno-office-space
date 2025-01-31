import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Office } from './pages/Office'
import { Home } from './pages/Home'
import { MainLayout } from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/office" element={<Office />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
