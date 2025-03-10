import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },  // ✅ Página principal con la descripción
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
