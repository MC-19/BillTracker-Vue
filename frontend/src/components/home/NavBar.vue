<template>
  <nav class="flex items-center justify-between px-30 bg-white shadow-md">
    <!-- Logo e Identidad -->
    <div class="flex items-center space-x-4">
      <!-- Aumenta la altura del logo para que se vea más grande -->
      <img
        src="@/assets/images/logo_web_small.png" alt="Logo" class="h-30"/>
    </div>

    <!-- Menú principal -->
    <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
      <li>
        <a href="#" class="hover:text-blue-500 transition-colors duration-300">
          Negocios ▾
        </a>
      </li>
      
      <li>
        <a href="#" class="hover:text-blue-500 transition-colors duration-300">
          Funcionalidades ▾
        </a>
      </li>

      <li>
        <a href="#" class="hover:text-blue-500 transition-colors duration-300">
          Factura electrónica
        </a>
      </li>

      <li>
        <a href="#" class="hover:text-blue-500 transition-colors duration-300">
          Precios
        </a>
      </li>

      <li>
        <a href="#" class="hover:text-blue-500 transition-colors duration-300">
          Recursos ▾
        </a>
      </li>
    </ul>

    <!-- Botones de acción -->
    <div class="flex space-x-4">
      <button class="px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300">
        Acceder
      </button>

      <button class="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300" >
        Regístrate gratis
      </button>
    </div>
  </nav>
</template>

<script setup>
// No necesitas nada específico en tu script para este ejemplo,
// pero aquí iría la lógica de tu componente en caso de ser necesaria.
</script>
