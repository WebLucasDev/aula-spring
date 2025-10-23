<template>
  <nav class="navbar">
    <input type="checkbox" id="menu-checkbox" hidden>
    <label for="menu-checkbox" class="menu-toggle">☰</label>
    <ul class="nav-list">
      <li><router-link to="/pessoas/listar" class="nav-link">Lista</router-link></li>
      <li><router-link to="/pessoas/cadastrar" class="nav-link">Cadastrar</router-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
