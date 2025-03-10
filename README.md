# 🚀 BillTracker

**BillTracker** es una plataforma para la gestión de facturación, desarrollada con **Vue 3 + TypeScript + Vite** en el frontend y **NestJS** en el backend.

## 📌 Tecnologías utilizadas
- 🖥 **Frontend**: Vue 3 + TypeScript + Vite
- ⚙️ **Backend**: NestJS + Node.js
- 🗄 **Base de datos**: PostgreSQL
- 🔗 **API REST**: NestJS con controladores y servicios
- 🛠 **Herramientas adicionales**: Docker

---

## 📦 Instalación y configuración

### 🔹 Requisitos previos
Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (v16+ recomendado)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

### 🔹 Clonar el repositorio
```bash
git clone https://github.com/tuusuario/BillTracker.git
cd BillTracker
```

### 🔹 Configurar el Backend (NestJS)
Antes de iniciar el backend, asegúrate de que PostgreSQL está en ejecución.
```bash
# Iniciar PostgreSQL (si no está en ejecución)
sudo systemctl start postgresql  # Para Linux
net start postgresql  # Para Windows

cd backend
npm install  # Instalar dependencias
cp .env.example .env  # Configurar variables de entorno
npm start  # Iniciar el servidor en modo desarrollo
```

### 🔹 Configurar el Frontend (Vue 3 + Vite)
```bash
cd frontend
npm install  # Instalar dependencias
npm run dev  # Iniciar el servidor de desarrollo
```
Por defecto, el frontend estará en `http://localhost:5173/` y el backend en `http://localhost:3000/`.

---

## 🚀 Despliegue

Para desplegar tu aplicación, revisa las opciones disponibles:

### 🌐 **Frontend en Vercel o Netlify**
Si quieres desplegar el frontend:
```bash
npm run build
```
Luego puedes subir la carpeta `dist/` a Vercel, Netlify o cualquier otro hosting de estáticos.

### 🏗 **Backend en Railway, Render o VPS**
Si quieres desplegar el backend en **Railway** o **Render**, revisa la [documentación de NestJS](https://docs.nestjs.com/deployment).

---

## ✅ Pruebas

Actualmente, no se pueden ejecutar pruebas, ya que el backend corre con `npm start` y se usa Docker.

---

## 📚 Recursos y documentación
- [NestJS Docs](https://docs.nestjs.com/)
- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vite Docs](https://vitejs.dev/)
- [Docker Docs](https://docs.docker.com/)

---

## 📌 Contacto
Si necesitas ayuda o tienes sugerencias, contáctame en [tu_email@example.com](mailto:tu_email@example.com).

---

### 📝 **Licencia**
Este proyecto está bajo la licencia **MIT**.
