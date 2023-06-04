import {
  COMPUTERS_ROUTE,
  COMPONENTS_ROUTE,
} from './consts/projectRoutes'


import ComputersPage from '../../features/computers/ComputersPage'
import ComponentsPage from '../../features/components/ComponentsPage'

export const projectRoutes = [
  {
    path: COMPUTERS_ROUTE + '/:id',
    Component: ComputersPage,
    name: 'Компьютеры',
  },
  {
    path: COMPONENTS_ROUTE,
    Component: ComponentsPage,
    name: 'Компоненты',
  },

]
