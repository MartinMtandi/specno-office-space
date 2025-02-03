import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { LoadingSpinner } from './components/LoadingSpinner'

// Lazy load page components
const Home = lazy(() => import('./pages/Home'))
const Office = lazy(() => import('./pages/Office'))
const OfficeFormPage = lazy(() => import('./pages/OfficeFormPage'))

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/office/:id" element={<Office />} />
            <Route path="/office/new" element={<OfficeFormPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  )
}

export default App
