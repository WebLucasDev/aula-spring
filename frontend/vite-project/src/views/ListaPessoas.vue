<template>
  <div>
    <Navbar />
    
    <main class="main-content">
      <h1>Lista de Pessoas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pessoa in lista" :key="pessoa.id">
            <td>{{ pessoa.id }}</td>
            <td>{{ pessoa.nome }}</td>
            <td>{{ pessoa.idade }}</td>
            <td>
              <router-link :to="`/pessoas/${pessoa.id}`" class="botao">Detalhes</router-link>
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
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { API_BASE_URL } from '../config/api';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

const lista = ref<Pessoa[]>([]);

const carregarPessoas = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/pessoas`);
    lista.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar pessoas:', error);
  }
};

onMounted(() => {
  carregarPessoas();
});
</script>
