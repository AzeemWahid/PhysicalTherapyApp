import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';
import MyDashboard from '../views/MyDashboard';
import FindProviders from '../views/FindProviders';
import FindPrograms from '../views/FindPrograms';
import FindExercises from '../views/FindExercises';
import CreateCustomPEMenu from '../views/CreateCustomPEMenu';
import CreateExercise from '../views/components/create-exercise';
import CreateProgram from '../views/components/create-program';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/findexercises',
    name: 'Exercises',
    component: FindExercises
  },
  {
    path: '/findprograms',
    name: 'Programs',
    component:  FindPrograms
  },
  {
    path: '/findproviders',
    name: 'Providers',
    component: FindProviders
  },
  {
    path: '/mydashboard',
    name: 'My Dashboard',
    component: MyDashboard
  },
  {
    path: '/createcustompemenu',
    name: 'Custom Creation',
    component: CreateCustomPEMenu
  },
  {
    path: '/createexercise',
    name: 'Create Exercise',
    component: CreateExercise
  },
  {
    path: '/createprogram',
    name: 'Create Program',
    component: CreateProgram
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
