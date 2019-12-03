import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Clips from '../views/Clips.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/clips/:name',
      name: 'clips',
      component: Clips,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});

export default router;
