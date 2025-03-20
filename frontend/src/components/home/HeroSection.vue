<template>
  <section 
    class="relative w-full flex flex-col justify-start items-center text-center overflow-hidden bg-green-100 px-6 py-20"
  >
    <!-- Imagen izquierda (Decoración) -->
    <img
      src="@/assets/images/home/brazo-c.png"
      alt="Decoración izquierda"
      class="hidden md:block absolute top-20 left-image"
    />

    <!-- Contenido principal -->
    <div class="z-10 max-w-3xl text-black mt-10">
      <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
        Simplifica tu <span class="text-green-600">facturación</span> y crece con 
        <span class="text-green-700">BillTracker</span>
      </h1>

      <p class="text-gray-700 mt-4 text-lg">
        <strong>BillTracker</strong> es un software integral de facturación y administración, diseñado para 
        <strong class="text-green-700">optimizar</strong> el día a día de tu negocio. Con herramientas potentes y un diseño intuitivo, 
        podrás <strong class="text-green-700">generar y enviar facturas en segundos</strong>, llevar un registro detallado de clientes y pagos, 
        y acceder a informes para tomar decisiones informadas.
      </p>

      <p class="text-gray-700 mt-4 text-lg">
        Ya seas un <strong class="text-green-700">autónomo</strong> o una <strong class="text-green-700">pyme en crecimiento</strong>, 
        BillTracker se adapta a tus necesidades y te ayuda a <strong class="text-green-700">escalar</strong> tu negocio sin complicaciones.
        ¡Despídete del papeleo y concéntrate en lo que mejor sabes hacer!
      </p>

      <!-- Botón CTA centrado -->
      <div class="mt-6 flex justify-center">
        <button 
        class="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition duration-300">
          Regístrate ahora
        </button>
      </div>
    </div>

    <!-- Imagen derecha (Decoración) -->
    <img
      src="@/assets/images/home/objetos-c.png"
      alt="Decoración derecha"
      class="hidden md:block absolute right-0 top-20"
    />
  </section>
</template>


