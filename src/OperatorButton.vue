<template lang='pug'>
.button-operator(v-html='symbol', @click='addSymbolOperand')
</template>

<script>
import {store} from './store'

export default {
  props: {
    which: String
  },

  methods: {
    addSymbolOperand () { store.addSymbolOperand(this.which) }
  },

  computed: {
    symbol () {
      return store.getOperatorSymbol(this.which)
    }
  }
}
</script>
