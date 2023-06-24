import { Airplane, Boat, CreditCard, FacebookLogo, InstagramLogo, Package, Truck, Warehouse, WhatsappLogo } from '@phosphor-icons/react'

export const NAV_LINKS = [
  {label: 'what we do', url: '/solution'},
  {label: 'pricing', url: '/pricing'},
  {label: 'contact', url: '/contact'},
  {label: 'about', url: '/about'},
]

export const FOOTER_LINKS = [
  {title: 'Overview', links: [
    {label: 'what we do', url: '/solution'},
    {label: 'pricing', url: '/pricing'},
  ]},
  {title: 'Company', links: [
    {label: 'about us', url: '/about'},
    {label: 'contact', url: '/contact'},
  ]},
  {title: 'Legal', links: [
    {label: 'terms', url: '/terms'},
    {label: 'cookies', url: '/cookies'},
    {label: 'licenses', url: '/licenses'},
  ]},
]

export const SOCIAL_LINKS = [
  {icon: <FacebookLogo />, url: 'https://facebook.com/'},
  {icon: <InstagramLogo />, url: 'https://facebook.com/'},
  {icon: <WhatsappLogo />, url: 'https://wa.me/'},
  {icon: <WhatsappLogo />, url: 'https://wa.me/'},
]

export const SOLUTION_TYPES = [
  {icon: <Airplane />, label: 'air freight service', url: '/solution'},
  {icon: <Boat />, label: 'ocean freight service', url: '/solution'},
  {icon: <Warehouse />, label: 'warehousing service', url: '/solution'},
]

export const SERVICE_ADVS = [
  {icon: <Package weight='duotone' />, label: 'easy shipment', value: 'We prioritize the safety of your shipments. From fragile items to valuable merchandise, we employ industry best practices to safeguard your cargo throughout the shipping process.'},
  {icon: <CreditCard weight='duotone' />, label: 'affordable pricing', value: `We understand the importance of timeliness in today's fast-paced world. We meticulously plan and execute each step of the shipping process to minimize delays and optimize transit times.`},
  {icon: <Truck weight='duotone' />, label: 'secure delivery', value: `In an era where speed matters, we excel in providing fast shipping solutions. We offer expedited shipping options to meet your urgent delivery requirements.`},
]