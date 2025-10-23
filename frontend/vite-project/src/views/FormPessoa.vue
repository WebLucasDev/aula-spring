<template>
  <div>
    
    <Navbar />
    
    <main class="main-content">
      <h1>Cadastrar Pessoa</h1>
      <form @submit.prevent="salvarPessoa">
        <div>
          <label>Nome:</label>
          <input 
            type="text" 
            v-model="pessoa.nome" 
            placeholder="Nome completo" 
            required 
          />
        </div>
        <div>
          <label>Idade:</label>
          <input 
            type="number" 
            v-model="pessoa.idade" 
            required 
          />
        </div>
        <button type="submit" class="botao">Salvar</button>
      </form>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { API_BASE_URL } from '../config/api';

const router = useRouter();

const pessoa = ref({
  nome: '',
  idade: 0
});

const salvarPessoa = async () => {
  try {
    await axios.post(`${API_BASE_URL}/api/pessoas`, pessoa.value);
    alert('Pessoa cadastrada com sucesso!');
    router.push('/pessoas/listar');
  } catch (error) {
    console.error('Erro ao salvar pessoa:', error);
    alert('Erro ao cadastrar pessoa');
  }
};
</script>
