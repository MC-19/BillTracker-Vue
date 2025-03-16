<template>
  <header class="bg-white shadow-md">
    <nav class="flex items-center justify-between px-8 xl:px-30 py-3 flex-nowrap">
      <!-- Logo con tamaño fijo para evitar deformación -->
      <div class="flex items-center min-w-[150px]">
        <img src="@/assets/images/logo_web_small.png" alt="Logo" class="h-16 md:h-25" />
      </div>

      <!-- Menú principal para pantallas grandes (desaparece en `xl` en lugar de `md`) -->
      <div class="hidden xl:flex justify-center flex-grow">
        <ul class="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Negocios ▾</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Funcionalidades ▾</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Factura electrónica</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Precios</a></li>
          <li><a href="#" class="hover:text-blue-500 transition-colors duration-300">Recursos ▾</a></li>
        </ul>
      </div>

      <!-- Botones de acción (ahora desaparecen antes en `xl`) -->
      <div class="hidden xl:flex space-x-3 whitespace-nowrap">
        <button class="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300">
          Acceder
        </button>
        <button class="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300">
          Regístrate gratis
        </button>
      </div>

      <!-- Botón menú hamburguesa (ahora aparece antes en `xl`) -->
      <button @click="menuAbierto = !menuAbierto" class="xl:hidden focus:outline-none">
        <div class="flex items-center space-x-2 border px-3 py-2 rounded-md">
          <span class="text-gray-700 font-medium">MENÚ</span>
          <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
      </button>
    </nav>

    <!-- Menú desplegable en pantallas más grandes (ahora en `xl`) -->
    <div v-if="menuAbierto" class="xl:hidden bg-white shadow-md">
      <ul class="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors duration-300">Negocios ▾</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors duration-300">Funcionalidades ▾</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors duration-300">Factura electrónica</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors duration-300">Precios</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors duration-300">Recursos ▾</a></li>
        
        <!-- Botones de acción dentro del menú desplegable -->
        <li class="pt-4">
          <button class="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300">
            Acceder
          </button>
        </li>
        <li>
          <button class="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300">
            Regístrate gratis
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuAbierto = ref(false);
</script>
