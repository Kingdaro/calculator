<template lang='pug'>
.button-operator(@click='addSymbolOperand')
  slot
</template>

<script>
import {store} from './store'

export default {
  props: {
    which: String
  },

  methods: {
    addSymbolOperand () { store.addSymbolOperand(this.which) }
  }
}
</script>
