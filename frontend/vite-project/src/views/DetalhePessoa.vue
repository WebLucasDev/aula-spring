<template>
  <div>
    
    <Navbar />
    <main class="main-content">
      <h1>Detalhes da Pessoa</h1>
      <table v-if="pessoa">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ pessoa.id }}</td>
            <td>{{ pessoa.nome }}</td>
            <td>{{ pessoa.idade }}</td>
            <td>
              <form @submit.prevent="excluirPessoa">
                <button type="submit" class="botao">Excluir</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { API_BASE_URL } from '../config/api';

const route = useRoute();
const router = useRouter();

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

const pessoa = ref<Pessoa | null>(null);

const carregarPessoa = async () => {
  try {
    const id = route.params.id;
    const response = await axios.get(`${API_BASE_URL}/api/pessoas/${id}`);
    pessoa.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar pessoa:', error);
    alert('Erro ao carregar dados da pessoa');
    router.push('/pessoas/listar');
  }
};

const excluirPessoa = async () => {
  if (!confirm('Tem certeza que deseja excluir esta pessoa?')) {
    return;
  }
  
  try {
    const id = route.params.id;
    await axios.delete(`${API_BASE_URL}/api/pessoas/${id}`);
    alert('Pessoa excluída com sucesso!');
    router.push('/pessoas/listar');
  } catch (error) {
    console.error('Erro ao excluir pessoa:', error);
    alert('Erro ao excluir pessoa');
  }
};

onMounted(() => {
  carregarPessoa();
});
</script>
