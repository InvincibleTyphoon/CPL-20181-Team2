<template>
  <div id="app">
    <HoscareHeader></HoscareHeader>
    <router-view/>
  </div>
</template>

<script>
import HoscareHeader from './components/HoscareHeader.vue'
export default {
  name: 'App',
  components: {
    'HoscareHeader': HoscareHeader,
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
  margin-top: 60px;
}
</style>
