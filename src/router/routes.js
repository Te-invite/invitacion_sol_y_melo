import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
const routes = [
  {
    path: '/Sol&Melo',
    name: 'Home',
    component: Home
  },
  {
    path: '/Sol&Melo/invitacion',
    name: 'Invitacion',
    component: () => import('../views/Invitacion.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;