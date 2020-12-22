<template>
<div id="nav">
  <nav class="w3-bar w3-twothird">
    <ul>
      <li class="w3-bar-item">
        <i class="fa fa-home"></i> 
        <router-link to="/">Home</router-link>
      </li>
      <li class="w3-bar-item">
        <i class="fa fa-shopping-bag"></i>
        <router-link to="/shop">Shop</router-link>
      </li>
      <li class="w3-bar-item">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
  <nav class="w3-bar w3-third" > 
    <ul>
    <li class="w3-bar-item w3-right">
        <i class="fa fa-shopping-bag"></i>
        Cart
      </li>
      </ul>
  </nav>
</div>
 
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* L'attribut scoped permet de n'avoir du style que sur l'élément courant */
@import url("");
/* On peut toujours importer ces feuilles de styles pour que ce soit encore plus lisible */
</style>