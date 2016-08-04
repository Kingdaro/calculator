<template lang='pug'>
.button-operator(v-html='symbol', @click='addOperator')
</template>

<script>
import {store} from './store'

export default {
  props: {
    which: String
  },

  methods: {
    addOperator () { store.addOperator(this.which) }
  },

  computed: {
    symbol () {
      return store.getOperatorSymbol(this.which)
    }
  }
}
</script>
