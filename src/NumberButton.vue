<template lang="pug">
.button-numeric(@click="click") {{ number }}
</template>

<script>
import {store} from './store'

export default {
  props: {
    number: Number
  },

  methods: {
    click () {
      store.typeDigit(this.number)
    }
  }
}
</script>
