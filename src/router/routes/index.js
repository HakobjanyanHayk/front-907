// ** Routes Imports
import UiElementRoutes from './UiElements'
import PagesRoutes from './Pages'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  ...UiElementRoutes,
  ...PagesRoutes
]

export { DefaultRoute, Routes }
