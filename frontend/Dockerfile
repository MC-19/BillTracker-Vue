# Usar Node.js como base
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias y evitar usar `node_modules` local
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public

# Instalar las dependencias con `--legacy-peer-deps` para evitar errores de npm
RUN npm install --legacy-peer-deps

# Copiar el resto del código
COPY . .

# Exponer el puerto 5173
EXPOSE 5173

# Comando de inicio
CMD ["npm", "run", "dev"]
