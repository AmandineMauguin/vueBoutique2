<template>
    <div><h1>Bonjour </h1></div>
</template>

<script>
export default {
    name:'Product',
    data(){
        return {
            products: [
        {
          name: "Masque Moustache",
          prix: 120,
          image: "/ressources/masque-moustache.jpg",
          image2: "/ressources/masque-moustache-2.jpg",
          stock: 0,
          hovered: null,
          tags: {
            Type: "Masque",
          },
        },
        {
          name: "Lumière Tetris",
          prix: 1200,
          image: "/ressources/tetris-lamp.jpg",
          image2: "/ressources/tetris-lamp-2.jpg",
          stock: 50,
          hovered: null,
          tags: {
            Type: "Lumière",
          },
        },
        {
          name: "Pull Noël",
          prix: 3,
          image: "/ressources/ressources.jpeg",
          image2: "/ressources/ressources.jpeg",
          stock: 12,
          hovered: null,
          tags: {
            Type: "Pull",
            Taille: "S, M, L",
          },
        },
        {
          name: "Pull Noël V2",
          prix: 2,
          image: "/ressources/christmas-sweater.jpg",
          image2: "/ressources/christmas-sweater-2.jpg",
          stock: 100,
          hovered: null,
          tags: {
            Type: "Pull",
            Taille: "S, M, L",
          },
        },
      ],
        }

    },
}
</script>

<style scoped>

</style>