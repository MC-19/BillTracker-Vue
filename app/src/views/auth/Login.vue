<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const credentials = ref({ email: "", password: "" });
const loading = ref(false);
const errorMessage = ref("");

// ✅ Función para iniciar sesión
const loginUser = async () => {
  errorMessage.value = "";
  if (!credentials.value.email || !credentials.value.password) {
    errorMessage.value = "Todos los campos son obligatorios.";
    return;
  }

  loading.value = true;
  const success = await authStore.login(credentials.value.email, credentials.value.password);

  if (success) {
    await authStore.fetchUser(); // 🔥 Recuperar datos del usuario al hacer login
    router.push("/"); // Redirigir al home si el login es correcto
  } else {
    errorMessage.value = "Correo o contraseña incorrectos."; // Mostrar error solo si falla
  }

  loading.value = false;
};
</script>



<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Iniciar sesión</h2>

      <p v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</p>

      <div class="mt-4">
        <label class="block text-gray-700">Correo Electrónico</label>
        <input
          type="email"
          v-model="credentials.email"
          class="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="Tu correo"
        />
      </div>

      <div class="mt-4">
        <label class="block text-gray-700">Contraseña</label>
        <input
          type="password"
          v-model="credentials.password"
          class="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="Tu contraseña"
        />
      </div>

      <button
        @click="loginUser"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-2 mt-6 rounded-md hover:bg-blue-700 transition disabled:opacity-50">
        {{ loading ? "Iniciando sesión..." : "Iniciar sesión" }}
      </button>

      <p class="text-gray-600 text-center mt-4">
        ¿No tienes cuenta? <a href="/register" class="text-blue-600 hover:underline">Regístrate</a>
      </p>
    </div>
  </div>
</template>
