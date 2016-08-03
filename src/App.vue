<template>
  <div>
    <h1>{{ msg }}</h1>
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  data () {
    return { msg: 'Hello SystemJS' }
  },
  created () {
    console.log('hi') // <-- check console for source map
  }
}
</script>

<style>
body {
  font-family: Helvetica;
}
</style>
