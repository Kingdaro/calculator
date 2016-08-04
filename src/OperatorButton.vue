<template lang='pug'>
.button-operator(@click='typeOperator')
  slot
</template>

<script>
import {store} from './store'

export default {
  props: {
    which: String
  },

  methods: {
    typeOperator () { store.typeOperator(this.which) }
  }
}
</script>
