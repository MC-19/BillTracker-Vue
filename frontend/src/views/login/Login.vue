<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const credentials = ref({ email: "", password: "" });
const loading = ref(false);
const errorMessage = ref("");
const successMessage = ref(""); // 🔥 Agregar esta línea

const loginUser = async () => {
  errorMessage.value = "";
  successMessage.value = ""; // 🔥 Asegurar que se inicializa antes de la solicitud

  if (!credentials.value.email || !credentials.value.password) {
    errorMessage.value = "Todos los campos son obligatorios.";
    return;
  }

  try {
    loading.value = true;

    // Verificar que la API URL esté configurada
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      console.error("❌ VITE_API_URL no está definido.");
      errorMessage.value = "Error interno, intenta más tarde.";
      return;
    }

    // Hacer la petición al backend
    const response = await axios.post(`${apiUrl}/auth/login`, {
      email: credentials.value.email,
      password: credentials.value.password,
    });

    if (!response.data.access_token) {
      throw new Error("❌ No se recibió el token de autenticación.");
    }

    console.log("✅ Token recibido:", response.data.access_token);

    // Guardar el token en localStorage
    localStorage.setItem("token", response.data.access_token);

    // Mensaje de éxito y redirección
    successMessage.value = "Inicio de sesión exitoso."; // ✅ Ahora sí está definido
    setTimeout(() => router.push("/dashboard"), 1000);
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          errorMessage.value = "Correo o contraseña incorrectos.";
          break;
        case 500:
          errorMessage.value = "Error en el servidor. Inténtalo más tarde.";
          break;
        default:
          errorMessage.value = "Error desconocido. Inténtalo de nuevo.";
          break;
      }
    } else if (error.request) {
      errorMessage.value = "No se pudo conectar con el servidor.";
    } else {
      errorMessage.value = "Ocurrió un error inesperado.";
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
