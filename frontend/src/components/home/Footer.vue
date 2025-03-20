<template>
  <footer class="bg-green-800 border-t border-green-700 text-white py-8 md:py-12 text-base md:text-lg">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
      
      <!-- Logo y descripción -->
      <div>
        <img src="@/assets/images/logo_web.png" alt="BillTracker Logo" class="h-30 md:h-22 mx-auto md:mx-0 mb-4" />
        <p class="px-4 md:px-0">
          BillTracker es el software de facturación en la nube que te permite gestionar tus ingresos y gastos en tiempo real, 
          crear facturas y presupuestos fácilmente, y automatizar tu contabilidad.
        </p>
      </div>

      <!-- Navegación -->
      <div>
        <h3 class="text-xl md:text-2xl font-semibold mb-4 text-white">Navegación</h3>
        <ul class="space-y-2 text-base">
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Inicio</a></li>
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Facturación</a></li>
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Precios</a></li>
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Soporte</a></li>
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Blog</a></li>
        </ul>
      </div>

      <!-- Información Legal -->
      <div>
        <h3 class="text-xl md:text-2xl font-semibold mb-4 text-white">Legal</h3>
        <ul class="space-y-2 text-base">
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Términos y condiciones</a></li>
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Política de privacidad</a></li>
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Política de cookies</a></li>
          <li><a href="#" class="hover:text-pink-400 transition duration-300">Aviso legal</a></li>
        </ul>
      </div>

      <!-- Contacto y redes sociales -->
      <div>
        <h3 class="text-xl md:text-2xl font-semibold mb-4 text-white">Contacto</h3>
        <p>Email: <a href="mailto:soporte@billtracker.com" class="hover:text-pink-400 transition duration-300">soporte@billtracker.com</a></p>
        <p>Teléfono: <a href="tel:+123456789" class="hover:text-pink-400 transition duration-300">+34 123 456 789</a></p>
        
        <!-- Botón de contacto -->
        <button class="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-500 transition duration-300 text-lg">
          Contactar soporte
        </button>

        <!-- Redes sociales centradas en móviles -->
        <div class="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="#" class="text-gray-300 hover:text-pink-400 transition duration-300"><i class="fab fa-facebook text-2xl"></i></a>
          <a href="#" class="text-gray-300 hover:text-pink-400 transition duration-300"><i class="fab fa-twitter text-2xl"></i></a>
          <a href="#" class="text-gray-300 hover:text-pink-400 transition duration-300"><i class="fab fa-linkedin text-2xl"></i></a>
        </div>
      </div>
    </div>

    <!-- Línea divisoria y copyright -->
    <div class="border-t border-green-700 mt-8 pt-6 text-center text-sm md:text-base text-gray-300">
      <p>© {{ year }} BillTracker. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear();
</script>
