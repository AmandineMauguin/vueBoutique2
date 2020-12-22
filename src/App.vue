<template>
  <Header/>
  <div class="contenu w3-center">
    <router-view />
    <Home />
    <Product />
    <Blog />
    <Contact />
    <Shop/>
  </div>

  <Footer />
</template>


<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Product from "./components/Product.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";
import Shop from "./components/Shop.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Product,
    Blog,
    Contact,
    Shop,
  },
  data() {},
};
</script>

<style>
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://fonts.googleapis.com/css?family=Lato");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("/src/assets/style.css");



</style>
