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

## 🚀 Dependencias

### 🔹 Backend (NestJS)
- @nestjs/cli@11.0.5
- @nestjs/common@11.0.11
- @nestjs/config@4.0.1
- @nestjs/core@11.0.11
- @nestjs/platform-express@11.0.11
- @nestjs/schematics@11.0.2
- @nestjs/testing@11.0.11
- @nestjs/typeorm@11.0.0
- @types/node@22.13.9
- pg@8.13.3
- reflect-metadata@0.2.2
- rxjs@7.8.2
- typeorm@0.3.21
- typescript@5.8.2

### 🔹 Frontend (Vue 3 + Vite)
- @vitejs/plugin-vue@5.2.1
- @vue/compiler-sfc@3.5.13
- @vue/tsconfig@0.7.0
- axios@1.8.1
- pinia@3.0.1
- tailwindcss@4.0.11
- vite@6.2.0
- vue-router@4.5.0
- vue-tsc@2.2.8
- vue@3.5.13

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
