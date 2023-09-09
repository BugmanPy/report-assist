import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routingConfig } from './config/route.config'
import PrivateRoutes from './privateRoutes'
import { Suspense } from 'react'

//! Check from cookie or token
const isAuthenticated = false

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //* Public Routes */}
        {routingConfig.public.map((publicRoute) => {
          const Component = publicRoute.element
          return (
            <Route
              key={publicRoute.path}
              path={publicRoute.path}
              element={
                isAuthenticated ? (
                  <Navigate to={routingConfig.private[0].path} replace />
                ) : (
                  <Suspense fallback={<>Loading...</>}>
                    <Component />
                  </Suspense>
                )
              }
            />
          )
        })}

        {/* //*Private Routes */}
        <Route element={<PrivateRoutes />}>
          {routingConfig.private.map((privateRoute) => {
            const Component = privateRoute.element
            return (
              <Route
                key={privateRoute.path}
                path={privateRoute.path}
                element={
                  <Suspense fallback={<>Loading...</>}>
                    <Component />
                  </Suspense>
                }
              />
            )
          })}
        </Route>

        {/* //* 404 - Path Not Found */}
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
