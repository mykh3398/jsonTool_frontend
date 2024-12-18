import { createRouter, createWebHistory } from 'vue-router';
import JsonFormatter from '../components/jsonSchema/JsonFormatter.vue';
import UserProfile from '../components/user/UserProfile.vue';
import UserRegister from '../components/user/UserRegister.vue';
import UserLogin from '../components/user/UserLogin.vue';

const routes = [
  {
    path: '/',
    name: 'JsonFormatter',
    component: JsonFormatter,
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister,
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
