import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/dashboard/Dashboard.vue';
import Register from '@/views/auth/Register.vue';
import Login from '@/views/auth/Login.vue';
import RegisterBusiness from "@/views/auth/register-business.vue";

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/register', name: 'register', component: Register },
  { path: "/register-business", component: RegisterBusiness },
  { path: '/login', name: 'login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
