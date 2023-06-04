import {
  COMPONENTS_PAGE,
  COMPUTERS_PAGE,
} from './consts/pagesRoutes'

import { projectRoutes } from './projectRoutes'

import ComputersPage from '../../features/computers/ComputersPage'
import ComponentsPage from '../../features/components/ComponentsPage'

export const authRoutes = [
  {
    path: COMPONENTS_PAGE,
    Component: ComponentsPage,
    name:'Список компонентов'
  },
  {
    path: COMPUTERS_PAGE,
    Component: ComputersPage,
    name: 'Список компьютеров',
  },
  ...projectRoutes.map((el) => el),
]
