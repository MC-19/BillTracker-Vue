<template>
  <section class="bg-white py-16 px-6 lg:px-32">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Texto a la izquierda -->
      <div>
        <h2 class="text-3xl lg:text-5xl font-bold text-green-600 leading-tight">
          Personaliza facturas y <br />
          presupuestos con tu marca
        </h2>
        <p class="mt-4 text-gray-800 text-lg">
          Elige entre <span class="font-bold">diferentes plantillas profesionales</span> 
          para personalizar tus facturas y presupuestos con tu marca.
        </p>
        <p class="mt-4 text-gray-800 text-lg">
          Adapta tus documentos y comunicaciones a tu imagen corporativa 
          incluyendo tu <span class="font-bold">logotipo, tipografía y colores.</span>
        </p>
        <button class="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition duration-300">
          Personaliza facturas
        </button>
      </div>

      <!-- Imagen a la derecha en escritorio, abajo en móvil -->
      <div class="flex justify-center lg:order-2">
        <img src="@/assets/images/home/personaliza-facturas.png" alt="Personalización de facturas" class="max-w-full h-auto">
      </div>

    </div>
  </section>
</template>
