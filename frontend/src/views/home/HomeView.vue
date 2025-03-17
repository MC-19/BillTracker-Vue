<script setup lang="ts">
  import Navbar from "@/components/home/NavBar.vue"; // ✅ Importamos el Navbar
  import HeroSection from "@/components/home/HeroSection.vue";
  import BrandsSection from "@/components/home/BrandsSection.vue";
  import Factura from "@/components/home/Factura.vue";
  import Facturacion from "@/components/home/Facturacion.vue";
  import PersonalizaFacturas from "@/components/home/Personaliza-facturas.vue";
  import ControlaIngresos from "@/components/home/Controla-ingresos.vue";
  import Footer from "@/components/home/Footer.vue";
</script>

<template>
  <div>
    <Navbar/>
    <HeroSection />
    <BrandsSection />
    <Factura/>
    <Facturacion/>
    <PersonalizaFacturas/>
    <ControlaIngresos/>
    <Footer/>
  </div>  
</template>


