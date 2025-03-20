<template>
  <section class="bg-white py-16 px-6 lg:px-32">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Texto a la izquierda -->
      <div>
        <h1 class="text-3xl lg:text-5xl font-bold text-green-600 leading-tight">
          Crea facturas y tickets fácil <br />
          y sin errores
        </h1>
        <p class="mt-4 text-gray-700 text-lg">
          ¡Ahorra hasta 16 horas de facturación al mes!
        </p>
        <p class="mt-4 text-gray-800 text-lg">
          Con <span class="font-bold">BillTracker</span>, puedes crear 
          <span class="font-bold">facturas, presupuestos, tickets de compra, facturas proformas, albaranes</span> 
          y mucho más <span class="font-bold">en menos de un minuto.</span>
        </p>
        <p class="mt-4 text-gray-800 text-lg">
          Hemos creado un programa de facturación adaptado a las necesidades de 
          <span class="font-bold">autónomos y pymes.</span>
        </p>
        <button class="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition duration-300">
          Crea y envía facturas
        </button>
      </div>

      <!-- Imagen a la derecha en escritorio, abajo en móvil -->
      <div class="flex justify-center lg:order-2">
        <img src="@/assets/images/home/factura.png" alt="Vista previa de factura" class="max-w-full h-auto">
      </div>

    </div>
  </section>
</template>
