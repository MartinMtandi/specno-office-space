import { vi } from 'vitest'

const actual = vi.importActual('react-router-dom')

export const useNavigate = vi.fn(() => vi.fn())
export const useParams = vi.fn(() => ({}))
export const useLocation = vi.fn(() => ({ pathname: '/' }))
export const useSearchParams = vi.fn(() => [new URLSearchParams(), vi.fn()])
export const Outlet = vi.fn(() => null)
export const Link = vi.fn(({ children, to }) => <a href={to}>{children}</a>)

export const BrowserRouter = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const Routes = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const Route = ({ element }: { element: React.ReactNode }) => <>{element}</>

// Re-export everything else from the actual module
export const { ...rest } = actual as any
