<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

// Definimos la interfaz de usuario
interface User {
  id: number;
  firstName: string;
  lastName1: string;
  lastName2: string;
  email: string;
}

// Estado reactivo para usuarios y nuevo usuario
const users = ref<User[]>([]);
const newUser = ref({ firstName: "", lastName1: "", lastName2: "", email: "", password: "" });
const loading = ref(false);
const errorMessage = ref("");

// Función para obtener la lista de usuarios
const fetchUsers = async () => {
  try {
    loading.value = true;
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
    users.value = response.data;
  } catch (error) {
    errorMessage.value = "Error al cargar usuarios. Inténtalo más tarde.";
    console.error(error);
  } finally {
    loading.value = false;
  }
};

// Función para agregar un nuevo usuario
const addUser = async () => {
  errorMessage.value = ""; // Limpiar errores anteriores

  // Validación básica
  if (!newUser.value.firstName || !newUser.value.lastName1 || !newUser.value.email || !newUser.value.password) {
    errorMessage.value = "Todos los campos son obligatorios";
    return;
  }
  if (newUser.value.password.length < 6) {
    errorMessage.value = "La contraseña debe tener al menos 6 caracteres";
    return;
  }

  try {
    loading.value = true;
    await axios.post(`${import.meta.env.VITE_API_URL}/users`, newUser.value);
    newUser.value = { firstName: "", lastName1: "", lastName2: "", email: "", password: "" };
    fetchUsers();
  } catch (error: any) {
    if (error.response && error.response.status === 409) {
      errorMessage.value = "El correo ya está registrado.";
    } else {
      errorMessage.value = "Error al agregar usuario. Inténtalo más tarde.";
    }
    console.error(error);
  } finally {
    loading.value = false;
  }
};

// Cargar usuarios al montar el componente
onMounted(fetchUsers);
</script>

<template>
  <div>
    <h2>Lista de Usuarios</h2>

    <p v-if="loading">Cargando...</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.firstName }} {{ user.lastName1 }} {{ user.lastName2 }} - {{ user.email }}
      </li>
    </ul>
    <p v-else>No hay usuarios registrados.</p>

    <h3>Agregar Usuario</h3>
    <input v-model="newUser.firstName" placeholder="Nombre" />
    <input v-model="newUser.lastName1" placeholder="Primer Apellido" />
    <input v-model="newUser.lastName2" placeholder="Segundo Apellido (Opcional)" />
    <input v-model="newUser.email" type="email" placeholder="Correo Electrónico" />
    <input v-model="newUser.password" type="password" placeholder="Contraseña" />

    <button @click="addUser" :disabled="loading">Agregar Usuario</button>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
