import { lazy } from 'react'

const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Home = lazy(() => import('./Home'))
const Pricing = lazy(() => import('./Pricing'))
const Solution = lazy(() => import('./Solution'))

export {
  About,
  Contact,
  Home,
  Pricing,
  Solution,
}