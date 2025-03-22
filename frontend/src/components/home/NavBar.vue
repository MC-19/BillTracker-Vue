<template>
  <header class="bg-white shadow-md">
    <nav class="flex items-center justify-between px-8 xl:px-30 py-3 flex-nowrap">
      <!-- Logo -->
      <div class="flex items-center min-w-[150px]">
        <img src="@/assets/images/logo_web_small.png" alt="Logo" class="h-16 md:h-25" />
      </div>

      <!-- Menú principal -->
      <div class="hidden xl:flex justify-center flex-grow">
        <ul class="flex space-x-6 text-gray-800 font-medium">
          <li><a href="#" class="hover:text-green-700 transition-all duration-200">Negocios ▾</a></li>
          <li><a href="#" class="hover:text-green-700 transition-all duration-200">Funcionalidades ▾</a></li>
          <li><a href="#" class="hover:text-green-700 transition-all duration-200">Factura electrónica</a></li>
          <li><a href="#" class="hover:text-green-700 transition-all duration-200">Precios</a></li>
          <li><a href="#" class="hover:text-green-700 transition-all duration-200">Recursos ▾</a></li>
        </ul>
      </div>

      <!-- Botones -->
      <div class="hidden xl:flex space-x-3 whitespace-nowrap">
        <template v-if="!isAuthenticated">
          <router-link to="/login">
            <button class="px-4 py-2 border border-gray-600 text-gray-800 rounded-full hover:bg-gray-200 transition-all duration-200">
              Acceder
            </button>
          </router-link>
          <router-link to="/register">
            <button class="px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-200">
              Regístrate gratis
            </button>
          </router-link>
        </template>

        <template v-else>
          <router-link to="/dashboard">
            <button class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-200">
              Mi Cuenta
            </button>
          </router-link>
          <button @click="logout" class="px-4 py-2 border border-gray-600 text-gray-800 rounded-full hover:bg-gray-200 transition-all duration-200">
            Cerrar sesión
          </button>
        </template>
      </div>

      <!-- Botón menú hamburguesa -->
      <button @click="menuAbierto = !menuAbierto" class="xl:hidden focus:outline-none">
        <div class="flex items-center space-x-2 border px-3 py-2 rounded-md">
          <span class="text-gray-800 font-medium">MENÚ</span>
          <svg class="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
      </button>
    </nav>

    <!-- Menú móvil -->
    <div v-if="menuAbierto" class="xl:hidden bg-white shadow-md">
      <ul class="flex flex-col space-y-4 p-4 text-gray-800 font-medium">
        <li><a href="#" class="block py-2 hover:text-green-700 transition-all duration-200">Negocios ▾</a></li>
        <li><a href="#" class="block py-2 hover:text-green-700 transition-all duration-200">Funcionalidades ▾</a></li>
        <li><a href="#" class="block py-2 hover:text-green-700 transition-all duration-200">Factura electrónica</a></li>
        <li><a href="#" class="block py-2 hover:text-green-700 transition-all duration-200">Precios</a></li>
        <li><a href="#" class="block py-2 hover:text-green-700 transition-all duration-200">Recursos ▾</a></li>

        <!-- Botones en menú móvil -->
        <template v-if="!isAuthenticated">
          <li class="pt-4">
            <router-link to="/login">
              <button class="w-full px-4 py-2 border border-gray-600 text-gray-800 rounded-full hover:bg-gray-200 transition-all duration-200">
                Acceder
              </button>
            </router-link>
          </li>
          <li>
            <router-link to="/register">
              <button class="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-200">
                Regístrate gratis
              </button>
            </router-link>
          </li>
        </template>

        <template v-else>
          <li class="pt-4">
            <router-link to="/dashboard">
              <button class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-200">
                Mi Cuenta
              </button>
            </router-link>
          </li>
          <li>
            <button @click="logout" class="w-full px-4 py-2 border border-gray-600 text-gray-800 rounded-full hover:bg-gray-200 transition-all duration-200">
              Cerrar sesión
            </button>
          </li>
        </template>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menuAbierto = ref(false);

// Verifica si hay un token JWT almacenado
const isAuthenticated = computed(() => !!localStorage.getItem("token"));

// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem("token"); // Eliminar el token
  router.push("/login"); // Redirigir al login
};
</script>
