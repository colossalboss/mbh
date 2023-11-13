<template>
  <div>
    <AppHead>
      <title>Free Football Predictions</title>
      <meta name="description" content="Free daily football predictions!">
      <!-- Social -->
      <meta property="og:title" content="Free daily football predictions!">
      <meta property="og:description" content="Free daily football predictions for you!">
      <meta property="og:image"
        content="https://vueschool.io/media/f007f6057444d9a7f567163391d2b366/vuejs-3-master-class-not-transparent.jpg">

      <!-- Twitter -->
      <meta name="twitter:title" content="Free daily football predictions!">
      <meta name="twitter:description" content="Free daily football predictions for you!">
      <meta name="twitter:image"
        content="https://vueschool.io/media/f007f6057444d9a7f567163391d2b366/vuejs-3-master-class-not-transparent.jpg">
      <meta name="twitter:card" content="summary_large_image">
    </AppHead>
  </div>

  <div>
    <navbar-section />
  </div>
 
  <router-view />

  <app-footer />
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    NavbarSection,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
