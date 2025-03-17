<template>
    <footer class="bg-gray-100 text-gray-700 py-12 px-6 lg:px-32">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo y descripción -->
        <div>
          <img src="@/assets/images/logo_web_small.png" alt="BillTracker Logo" class="h-12 mb-4" />
          <p class="text-sm">
            BillTracker es el software de facturación en la nube que te permite gestionar tus ingresos y gastos en tiempo real, 
            crear facturas y presupuestos fácilmente, y automatizar tu contabilidad.
          </p>
        </div>
  
        <!-- Navegación -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-blue-700">Navegación</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Inicio</a></li>
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Facturación</a></li>
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Precios</a></li>
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Soporte</a></li>
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Blog</a></li>
          </ul>
        </div>
  
        <!-- Información Legal -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-blue-700">Legal</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Términos y condiciones</a></li>
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Política de privacidad</a></li>
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Política de cookies</a></li>
            <li><a href="#" class="hover:text-blue-500 transition duration-300">Aviso legal</a></li>
          </ul>
        </div>
  
        <!-- Contacto y redes sociales -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-blue-700">Contacto</h3>
          <p class="text-sm">Email: <a href="mailto:soporte@billtracker.com" class="hover:text-blue-500 transition duration-300">soporte@billtracker.com</a></p>
          <p class="text-sm">Teléfono: <a href="tel:+123456789" class="hover:text-blue-500 transition duration-300">+34 123 456 789</a></p>
          
          <!-- Botón de contacto -->
          <button class="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition duration-300">
            Contactar soporte
          </button>
  
          <!-- Redes sociales -->
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-gray-600 hover:text-blue-500 transition duration-300"><i class="fab fa-facebook text-2xl"></i></a>
            <a href="#" class="text-gray-600 hover:text-blue-500 transition duration-300"><i class="fab fa-twitter text-2xl"></i></a>
            <a href="#" class="text-gray-600 hover:text-blue-500 transition duration-300"><i class="fab fa-linkedin text-2xl"></i></a>
          </div>
        </div>
      </div>
  
      <!-- Línea divisoria y copyright -->
      <div class="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-600">
        © {{ new Date().getFullYear() }} BillTracker. Todos los derechos reservados.
      </div>
    </footer>
  </template>
  