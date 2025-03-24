import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "../src/stores/auth"; // 🔹 Importar el store de autenticación

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

const authStore = useAuthStore();
if (authStore.token) {
  authStore.fetchUser(); // ✅ Cargar el usuario si hay token almacenado
}

app.mount("#app");
