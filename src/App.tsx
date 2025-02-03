import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { MainLayout } from './layouts/MainLayout'

// Lazy load route components
const Home = lazy(() => import('./pages/Home'))
const Office = lazy(() => import('./pages/Office'))
const OfficeFormPage = lazy(() => import('./pages/OfficeFormPage'))

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    color: '#2563eb'
  }}>
    Loading...
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/office/new" element={<OfficeFormPage />} />
            <Route path="/office/:id" element={<Office />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
