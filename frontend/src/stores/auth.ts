import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user") || "null"),
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { email, password });

        this.token = response.data.access_token;
        localStorage.setItem("token", this.token);

        // 🔥 Asegurarse de que todas las peticiones lleven el token en los headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;

        await this.fetchUser(); // ✅ Obtener datos del usuario tras iniciar sesión
        return true;
      } catch (error) {
        console.error("❌ Error en el login:", error);
        return false;
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // ❌ Importante: Eliminar el token de los headers de axios
      delete axios.defaults.headers.common["Authorization"];
    },

    async fetchUser() {
      if (!this.token) return;

      try {
        // ✅ Asegurar que el token se envía en los headers
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        this.user = response.data;
        localStorage.setItem("user", JSON.stringify(this.user));
      } catch (error) {
        console.error("❌ Error obteniendo el usuario:", error);
        this.logout();
      }
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
