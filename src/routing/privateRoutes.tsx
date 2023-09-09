import { Navigate, Outlet } from 'react-router-dom'
import { routingConfig } from './config/route.config'

function PrivateRoutes() {
  let auth = { token: false }
  return auth.token ? <Outlet /> : <Navigate to={routingConfig.defaultRedirect} />
}

export default PrivateRoutes
