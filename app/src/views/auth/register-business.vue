<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const newBusiness = ref({
  nombre: "",
  sector_id: null,
  telefono: "",
  direccion: "",
  ciudad: "",
  codigo_postal: "",
  provincia: "",
  pais: "",
  estado: "activo",
  userId: route.query.userId || null, // ✅ Capturamos el userId de la URL
});

const loading = ref(false);
const successMessage = ref("");
const errors = ref({
  nombre: "",
});

// ✅ Validar formulario antes de enviarlo
const validateForm = () => {
  errors.value = { nombre: "" };

  if (!newBusiness.value.nombre) {
    errors.value.nombre = "El nombre del negocio es obligatorio.";
  }

  return Object.values(errors.value).every((error) => error === "");
};

// ✅ Función para registrar el negocio
const registerBusiness = async () => {
  successMessage.value = "";

  if (!validateForm()) return;

  try {
    loading.value = true;

    await axios.post(`${import.meta.env.VITE_API_URL}/business`, newBusiness.value);

    successMessage.value = "Negocio registrado con éxito. Redirigiendo...";

    // 🔀 Redirigir al dashboard tras registrar el negocio
    setTimeout(() => {
      router.push("/");
    }, 1500);
  } catch (error) {
    errors.value.nombre = "Error al registrar negocio. Inténtalo más tarde.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-600 text-center">Registra tu negocio</h2>
      <p class="text-gray-700 text-center mb-4">Completa los datos de tu empresa</p>

      <p v-if="successMessage" class="text-green-500 text-center mb-4">{{ successMessage }}</p>

      <form @submit.prevent="registerBusiness">
        <!-- Nombre del negocio -->
        <div class="mt-4">
          <label class="block text-gray-900">Nombre del Negocio</label>
          <input
            type="text"
            v-model="newBusiness.nombre"
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Introduce el nombre del negocio"
          />
          <p v-if="errors.nombre" class="text-red-500 text-sm">{{ errors.nombre }}</p>
        </div>

        <!-- Sector (Opcional) -->
        <div class="mt-4">
          <label class="block text-gray-900">Sector</label>
          <input
            type="number"
            v-model="newBusiness.sector_id"
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="ID del sector (opcional)"
          />
        </div>

        <!-- Teléfono -->
        <div class="mt-4">
          <label class="block text-gray-900">Teléfono</label>
          <input
            type="text"
            v-model="newBusiness.telefono"
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Introduce el teléfono"
          />
        </div>

        <!-- Dirección -->
        <div class="mt-4">
          <label class="block text-gray-900">Dirección</label>
          <input
            type="text"
            v-model="newBusiness.direccion"
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Introduce la dirección"
          />
        </div>

        <button class="w-full bg-green-600 text-white py-2 mt-6 rounded-md hover:bg-green-700 transition duration-300">
          Registrar Negocio
        </button>
      </form>
    </div>
  </div>
</template>
