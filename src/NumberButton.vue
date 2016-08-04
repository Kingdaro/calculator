<template lang="pug">
.button-numeric(@click="click") {{ number }}
</template>

<script>
import {store} from './store'

export default {
  props: {
    number: String
  },

  methods: {
    click () {
      store.addNumber(this.number)
    }
  }
}
</script>
