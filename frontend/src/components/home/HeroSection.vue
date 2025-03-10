<template>
  <!-- Contenedor con min-h-screen, pero anclado arriba (justify-start) -->
  <section
  class="relative w-full min-h-[60vh] flex flex-col justify-start items-center text-center overflow-hidden
         bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 px-4 pt-6"
    >
    <!-- Imagen izquierda (Brazo), anclada cerca del top -->
    <img
      src="@/assets/images/home/brazo-c.png"
      alt="Decoración izquierda"
      class="hidden md:block absolute left-0 top-20"
    />

    <!-- Contenido principal (texto) con algo de margen top (mt-10) si quieres separarlo aún más -->
    <div class="z-10 max-w-3xl text-black mt-10">
      <h1 class="text-5xl font-extrabold leading-tight">
        Simplifica tu <span class="text-blue-600">facturación</span> y crece con <span class="text-blue-800">BillTracker</span>
      </h1>

      <p class="text-gray-800 mt-4 text-lg">
        <strong>BillTracker</strong> es un software integral de facturación y administración, diseñado para 
        <strong>optimizar</strong> el día a día de tu negocio. Con herramientas potentes y un diseño intuitivo, 
        podrás <strong>generar y enviar facturas en segundos</strong>, llevar un registro detallado de clientes y pagos, 
        y acceder a informes para tomar decisiones informadas.
      </p>
      <p class="text-gray-800 mt-4 text-lg">
        Ya seas un <strong>autónomo</strong> o una <strong>pyme en crecimiento</strong>, BillTracker se adapta a tus necesidades 
        y te ayuda a <strong>escalar</strong> tu negocio sin complicaciones. ¡Despídete del papeleo y concéntrate 
        en lo que mejor sabes hacer!
      </p>

      <!-- Input y botón (CTA) -->
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Tu correo electrónico"
          class="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Más información
        </button>
      </div>

      <p class="text-gray-700 text-sm mt-3">
        Recibirás noticias y actualizaciones sobre BillTracker.
      </p>
    </div>

    <!-- Imagen derecha (Objetos), anclada cerca del top -->
    <img
      src="@/assets/images/home/objetos-c.png"
      alt="Decoración derecha"
      class="hidden md:block absolute right-0 top-20"
    />
  </section>
</template>

<style scoped>
/* Ajusta top-20, pt-10 o mt-10 según quieras más o menos espacio arriba/abajo */
</style>
