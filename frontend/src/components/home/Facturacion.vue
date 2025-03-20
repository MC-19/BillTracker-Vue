<template>
  <section class="bg-green-50 py-16 px-6 lg:px-32">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reversed-on-zoom">
      
      <!-- Imagen abajo cuando hay zoom -->
      <div class="flex justify-center">
        <img src="@/assets/images/home/facturacion.png" alt="Vista previa del sistema de facturación" class="max-w-full h-auto">
      </div>

      <!-- Texto arriba cuando hay zoom -->
      <div class="text-left">
        <h2 class="text-3xl lg:text-5xl font-bold text-green-600 leading-tight">
          El programa de facturación <br />
          online con todo lo que necesitas
        </h2>
        <p class="mt-4 text-gray-800 text-lg">
          <span class="font-bold">BillTracker</span> es un <span class="font-bold">programa de facturación de acceso gratuito</span> 
          con control de ingresos y gastos, administración de cobros y pagos, gestión de productos y servicios, 
          y cuenta con la creación de negocios y clientes ilimitados.
        </p>
        <p class="mt-4 text-gray-800 text-lg">
          Crea y envía tantas facturas y presupuestos como necesites.
        </p>
        <button class="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition duration-300">
          Más sobre el programa de facturación
        </button>
      </div>

    </div>
  </section>
</template>


