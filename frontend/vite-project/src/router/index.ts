import { createRouter, createWebHistory } from 'vue-router';
import ListaPessoas from '../views/ListaPessoas.vue';
import FormPessoa from '../views/FormPessoa.vue';
import DetalhePessoa from '../views/DetalhePessoa.vue';

const routes = [
  {
    path: '/',
    redirect: '/pessoas/listar'
  },
  {
    path: '/pessoas/listar',
    name: 'ListaPessoas',
    component: ListaPessoas
  },
  {
    path: '/pessoas/cadastrar',
    name: 'FormPessoa',
    component: FormPessoa
  },
  {
    path: '/pessoas/:id',
    name: 'DetalhePessoa',
    component: DetalhePessoa
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
