import { NavItem } from "./interfaces";

export const navItem: NavItem[] = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Nosotros',
    to: '/nosotros'
  },
  {
    label: 'Ministerios',
    to: '/ministerios',
    children: []
  },
  {
    label: 'Eventos',
    to: '/eventos'
  },
  {
    label: 'Blog',
    to: '/blog'
  }
]
