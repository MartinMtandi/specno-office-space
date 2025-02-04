import { HashRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { MainLayout } from './layouts/MainLayout'
import { Spinner } from './components/Spinner'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

// Lazy load route components
const Home = lazy(() => import('./pages/Home'))
const Office = lazy(() => import('./pages/Office'))
const OfficeFormPage = lazy(() => import('./pages/OfficeFormPage'))

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/office/:id" element={<Office />} />
              <Route path="/office/new" element={<OfficeFormPage />} />
              <Route path="/office/:id/edit" element={<OfficeFormPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
