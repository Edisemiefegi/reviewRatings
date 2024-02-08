// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from "../src/views/Home.vue";
import About from "../src/views/About.vue";


const routes = [
  { 
    path: '/',
    component: Home,
    name: 'Home'
   },
   { 
    path: '/about',
    component: About,
    name: 'About'
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
