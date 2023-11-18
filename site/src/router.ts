import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      meta: {
        heading: "HOME",
        title: "aroni.co | Home" }
    },
  ],
  scrollBehavior (_to, _from, savedPosition) {
    if (_to.hash) {
      return {
        el: _to.hash,
        behavior: 'smooth',
      } 
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});
