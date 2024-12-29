
import knife from '../assets/images/icons/knife.svg'
import bag from '../assets/images/icons/bag.svg'
import inventory from '../assets/images/icons/inventory.svg'
import map from '../assets/images/icons/map.svg'
import portals from '../assets/images/icons/portals.svg'
import pvp from '../assets/images/icons/pvp.svg'

export interface IMenuItem {
  href: string
  title: string
  icon: string
  isBlocked: boolean
}
export const menuItems: IMenuItem[] = [
  {
    href: '/battle',
    title: 'Battle',
    icon: knife,
    isBlocked: true,
  },
  {
    href: '/quests',
    title: 'Quest',
    icon: bag,
    isBlocked: false,
  },
  {
    href: '/village',
    title: 'Village',
    icon: map,
    isBlocked: true,
  },
  {
    href: '/portals',
    title: 'Portals',
    icon: portals,
    isBlocked: true,
  },
  {
    href: '/profile',
    title: 'Inventory',
    icon: inventory,
    isBlocked: false,
  },
  {
    href: '/pvp',
    title: 'PVP',
    icon: pvp,
    isBlocked: true,
  },
]
