<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useAuthStore } from "../../stores/auth"; 
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const newUser = ref({ email: "", password: "", confirmPassword: "" });
const loading = ref(false);
const successMessage = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const errors = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

// ✅ Validar formulario antes de enviarlo
const validateForm = () => {
  errors.value = { email: "", password: "", confirmPassword: "" };

  if (!newUser.value.email) {
    errors.value.email = "El correo es obligatorio.";
  } else if (!/^\S+@\S+\.\S+$/.test(newUser.value.email)) {
    errors.value.email = "Introduce un correo válido.";
  }

  if (!newUser.value.password) {
    errors.value.password = "La contraseña es obligatoria.";
  } else if (newUser.value.password.length < 8) {
    errors.value.password = "Debe tener al menos 8 caracteres.";
  }

  if (newUser.value.confirmPassword !== newUser.value.password) {
    errors.value.confirmPassword = "Las contraseñas no coinciden.";
  }

  return Object.values(errors.value).every((error) => error === "");
};

// ✅ Registrar usuario y redirigir a la vista de negocio
const registerUser = async () => {
  successMessage.value = "";

  if (!validateForm()) return;

  try {
    loading.value = true;

    // 🔥 Petición de registro
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
      email: newUser.value.email,
      password: newUser.value.password,
    });

    // ✅ Guardar el token recibido
    const token = response.data.access_token;
    authStore.token = token;
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // ✅ Obtener los datos del usuario autenticado
    const user = await authStore.fetchUser();

    successMessage.value = "Cuenta creada con éxito. Redirigiendo...";

    // 🔀 Redirigir al formulario de negocio con el `userId`
    setTimeout(() => {
      router.push(`/register-business?userId=${user.id}`);
    }, 1500);
  } catch (error: any) {
    if (error.response?.status === 409) {
      errors.value.email = "El correo ya está registrado.";
    } else {
      errors.value.email = "Error al registrar usuario. Inténtalo más tarde.";
    }
  } finally {
    loading.value = false;
  }
};
</script>



<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-600 text-center">Crea tu cuenta</h2>
      <p class="text-gray-700 text-center mb-4">Regístrate en minutos</p>

      <p v-if="successMessage" class="text-green-500 text-center mb-4 animate-pulse">{{ successMessage }}</p>

      <form @submit.prevent="registerUser">
        <!-- Correo Electrónico -->
        <div class="mt-4">
          <label class="block text-gray-900">Correo Electrónico</label>
          <input
            type="email"
            v-model="newUser.email"
            class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Introduce tu correo"
          />
          <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
        </div>

        <!-- Contraseña -->
        <div class="mt-4 relative">
          <label class="block text-gray-900">Contraseña</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="newUser.password"
              class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
              placeholder="Crea una contraseña"
            />
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-3 text-gray-600">
              <span v-if="!showPassword">👁️</span>
              <span v-else>🙈</span>
            </button>
          </div>
          <p class="text-sm text-gray-600 mt-1">Debe tener al menos 8 caracteres.</p>
          <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
        </div>

        <!-- Confirmación de contraseña -->
        <div class="mt-4 relative">
          <label class="block text-gray-900">Confirmar Contraseña</label>
          <div class="relative">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="newUser.confirmPassword"
              class="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
              placeholder="Repite la contraseña"
            />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-3 top-3 text-gray-600">
              <span v-if="!showConfirmPassword">👁️</span>
              <span v-else>🙈</span>
            </button>
          </div>
          <p v-if="errors.confirmPassword" class="text-red-500 text-sm">{{ errors.confirmPassword }}</p>
        </div>

        <button 
          class="w-full bg-green-600 text-white py-2 mt-6 rounded-md hover:bg-green-700 transition duration-300"
          :disabled="loading"
        >
          {{ loading ? "Registrando..." : "Registrarse" }}
        </button>
      </form>

      <p class="text-center text-gray-600 text-sm mt-4">
        ¿Ya tienes cuenta? <router-link to="/login" class="text-green-600 hover:underline">Inicia sesión</router-link>
      </p>
    </div>
  </div>
</template>

