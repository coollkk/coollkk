<template>
  <div id="app">
    <router-view/>
    <footerguide/>
  </div>
</template>

<script>
import footerguide from './components/footerguide.vue'
export default {
  name: 'App',
  components: {
    footerguide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #74b9ff;
  height: 100vh;
  font-size: 28px;
}
</style>
