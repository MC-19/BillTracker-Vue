<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

// Estado reactivo para el formulario
const newUser = ref({ email: "", password: "" });
const loading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

// Función para registrar un nuevo usuario
const registerUser = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!newUser.value.email || !newUser.value.password) {
    errorMessage.value = "Todos los campos son obligatorios.";
    return;
  }
  if (newUser.value.password.length < 8) {
    errorMessage.value = "La contraseña debe tener al menos 8 caracteres.";
    return;
  }

  try {
    loading.value = true;
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, newUser.value);
    successMessage.value = "Cuenta creada con éxito. Revisa tu correo.";
    newUser.value = { email: "", password: "" };
  } catch (error: any) {
    if (error.response && error.response.status === 409) {
      errorMessage.value = "El correo ya está registrado.";
    } else {
      errorMessage.value = "Error al registrar usuario. Inténtalo más tarde.";
    }
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Crea tu cuenta</h2>
      <p class="text-gray-500 text-center mb-4">Regístrate en minutos</p>

      <p v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</p>
      <p v-if="successMessage" class="text-green-500 text-center">{{ successMessage }}</p>

      <div class="mt-4">
        <label class="block text-gray-700">Correo Electrónico</label>
        <input
          type="email"
          v-model="newUser.email"
          class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Introduce tu correo"
        />
      </div>

      <div class="mt-4">
        <label class="block text-gray-700">Contraseña</label>
        <input
          type="password"
          v-model="newUser.password"
          class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Crea una contraseña"
        />
        <p class="text-sm text-gray-500 mt-1">Debe tener al menos 8 caracteres.</p>
      </div>

      <button
        @click="registerUser"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-2 mt-6 rounded-md hover:bg-blue-700 transition disabled:opacity-50">
        {{ loading ? "Registrando..." : "Registrarse" }}
      </button>

      <p class="text-gray-600 text-center mt-4">
        ¿Ya tienes una cuenta? <a href="/login" class="text-blue-600 hover:underline">Inicia sesión</a>
      </p>
    </div>
  </div>
</template>
