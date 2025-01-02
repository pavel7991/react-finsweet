import { ComponentType } from 'react'
import About from '../components/pages/AllPosts'
import Contacts from '../components/pages/Contacts'
import Home from '../components/pages/Home'

interface Route {
  path: string
  label: string
  Component: ComponentType
}

export const routes: Route[] = [
  { path: '', label: 'Home', Component: Home },
  { path: '/posts', label: 'Posts', Component: About },
  { path: '/contacts', label: 'Contacts', Component: Contacts }
]
