<template>
  <section class="bg-green-50 py-16 px-6 lg:px-32">
    <!-- Contenedor flexible con mejor orden en móviles -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Imagen en móviles abajo, en escritorio a la derecha -->
      <div class="flex justify-center lg:order-2">
        <img src="@/assets/images/home/controla-ingresos.png" alt="Control de ingresos y gastos" class="max-w-full h-auto">
      </div>

      <!-- Texto arriba en móviles, izquierda en escritorio -->
      <div class="text-left">
        <h2 class="text-3xl lg:text-5xl font-bold text-green-600 leading-tight">
          Controla tus ingresos y gastos en <br />
          tiempo real
        </h2>
        <p class="mt-4 text-gray-800 text-lg">
          Organiza y gestiona las <span class="font-bold">facturas de tus clientes y proveedores en un mismo sitio.</span>
        </p>
        <p class="mt-4 text-gray-800 text-lg">
          Ten el control de tu negocio y <span class="font-bold">supervisa tu facturación en tiempo real</span> 
          desde tu ordenador o teléfono móvil y estés donde estés.
        </p>
        <button class="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition duration-300">
          Controla ingresos y gastos
        </button>
      </div>

    </div>
  </section>  
</template>
