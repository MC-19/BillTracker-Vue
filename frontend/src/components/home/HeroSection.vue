<template>
  <section
    class="relative w-full flex flex-col justify-start items-center text-center overflow-hidden
          bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 px-6 py-20 "
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
        Simplifica tu <span class="text-blue-600">facturación</span> y crece con 
        <span class="text-blue-800">BillTracker</span>
      </h1>

      <p class="text-gray-800 mt-4 text-lg">
        <strong>BillTracker</strong> es un software integral de facturación y administración, diseñado para 
        <strong class="text-blue-700">optimizar</strong> el día a día de tu negocio. Con herramientas potentes y un diseño intuitivo, 
        podrás <strong class="text-blue-700">generar y enviar facturas en segundos</strong>, llevar un registro detallado de clientes y pagos, 
        y acceder a informes para tomar decisiones informadas.
      </p>

      <p class="text-gray-800 mt-4 text-lg">
        Ya seas un <strong class="text-blue-700">autónomo</strong> o una <strong class="text-blue-700">pyme en crecimiento</strong>, 
        BillTracker se adapta a tus necesidades y te ayuda a <strong class="text-blue-700">escalar</strong> tu negocio sin complicaciones.
        ¡Despídete del papeleo y concéntrate en lo que mejor sabes hacer!
      </p>

      <!-- Botón CTA centrado -->
      <div class="mt-6 flex justify-center">
        <button
          class="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 shadow-md"
        >
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

<style scoped>
.left-image {
  left: 90px; /* Ajusta el valor según lo que necesites */
}
</style>
