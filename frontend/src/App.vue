<script setup lang="ts">
import { useRoute } from "vue-router";
import HomeView from "@/views/home/HomeView.vue";

const route = useRoute();
</script>

<template>
  <div>
    <!-- Si la ruta actual es "/", muestra HomeView -->
    <HomeView v-if="route.path === '/'" />
    <router-view v-else /> <!-- En cualquier otra ruta, muestra la página correspondiente -->
  </div>
</template>
