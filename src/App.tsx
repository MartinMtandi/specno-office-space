import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Office } from './pages/Office'
import { Home } from './pages/Home'
import { MainLayout } from './layouts/MainLayout'
import { NewOfficeForm } from './components/NewOfficeForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/office/new" element={<NewOfficeForm onSave={() => {}} />} />
          <Route path="/office/:id" element={<Office />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
