<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

// Definimos la interfaz de usuario
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// Estado reactivo para usuarios y nuevo usuario
const users = ref<User[]>([]);
  const newUser = ref({ firstName: "", lastName: "", email: "", password: "" });

// Función para obtener la lista de usuarios
const fetchUsers = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
  users.value = response.data;
};

// Función para agregar un nuevo usuario
const addUser = async () => {
  await axios.post(`${import.meta.env.VITE_API_URL}/users`, newUser.value);
  newUser.value = { firstName: "", lastName: "", email: "", password: "" };
  fetchUsers();
};

// Cargar usuarios al montar el componente
onMounted(fetchUsers);
</script>

<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
      </li>
    </ul>

    <h3>Agregar Usuario</h3>
    <input v-model="newUser.firstName" placeholder="Nombre" />
    <input v-model="newUser.lastName" placeholder="Apellidos" />
    <input v-model="newUser.email" type="email" placeholder="Correo Electrónico" />
    <input v-model="newUser.password" type="password" placeholder="Contraseña" />
    <button @click="addUser">Agregar Usuario</button>
  </div>
</template>
