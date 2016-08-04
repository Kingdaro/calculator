<template lang="pug">
.container
  .calculator
    .row
      .result.col-4(v-html="result")
    .row
      .button-operator.col-1(@click="addOperator('plus')") +
      .button-operator.col-1(@click="addOperator('minus')") -
      .button-operator.col-1(@click="addOperator('times')") &times;
      .button-operator.col-1(@click="addOperator('divide')") &divide;
    .row
      .button-numeric.col-1(@click="addNumber('7')") 7
      .button-numeric.col-1(@click="addNumber('8')") 8
      .button-numeric.col-1(@click="addNumber('9')") 9
      .button-special.col-1.rowspan-2(@click="clear") C
    .row
      .button-numeric.col-1(@click="addNumber('4')") 4
      .button-numeric.col-1(@click="addNumber('5')") 5
      .button-numeric.col-1(@click="addNumber('6')") 6
    .row
      .button-numeric.col-1(@click="addNumber('1')") 1
      .button-numeric.col-1(@click="addNumber('2')") 2
      .button-numeric.col-1(@click="addNumber('3')") 3
      .button-special.col-1.rowspan-2 &equals;
    .row
      .button-special.col-1 &plusmn;
      .button-numeric.col-1(@click="addNumber('0')") 0
      .button-special.col-1 &period;
</template>

<script>
import {store, state} from './store'

export default {
  data () {
    return {
      state
    }
  },

  methods: {
    addNumber (value) {
      store.addNumber(value)
    },

    addOperator (which) {
      store.addOperator(which)
    },

    clear () {
      store.clear()
    }
  },

  computed: {
    result () {
      return store.result
    }
  }
}
</script>

<style lang="stylus">
// gridstuff
$grid-cell-width = 2.5em
$grid-cell-height = 2.7em
$grid-spacing = 2px

grid-length($cell-span, $cell-length) {
  $length = $cell-span * unit($cell-length, rem)
  $extra = ($cell-span - 1) * $grid-spacing
  return 'calc(%s + %s)' % ($length $extra)
}

.row {
  display: flex
  height: $grid-cell-height

  &:not(:last-child) {
    margin-bottom: $grid-spacing
  }
}

for $span in 1..4 {
  .col-{$span} {
    width: grid-length($span, $grid-cell-width)

    &:not(:last-child) {
      margin-right: $grid-spacing
    }
  }
}

for $span in 1..4 {
  .rowspan-{$span} {
    height: grid-length($span, $grid-cell-height)
  }
}

// reset to make everything size in a non-stupid way
* { box-sizing: border-box }

// font styles
:root {
  font: 32px Roboto, sans-serif
  font-weight: lighter
  color: #777
}

// app component styles
.container {
  position: absolute
  left: 0; right: 0
  top: 0; bottom: 0

  display: flex
  justify-content: center
  align-items: center
}

.calculator {
  box-shadow: 0px 2px 6px gray
}

.result {
  display: flex
  justify-content: flex-end
  align-items: center
  padding: 0 1rem
  background-color: rgb(170,122,240)
  color: white
}

.button {
  display: flex
  justify-content: center
  align-items: center
  color: white
  cursor: pointer
  transition: 0.2s

  -webkit-user-select: none
  user-select: none

  &:hover {
    opacity: 0.8
  }

  &:active {
    opacity: 0.5
    transition: 0s
  }
}

.button-numeric {
  @extend .button
  background-color: rgb(52,173,232)
}

.button-operator {
  @extend .button
  background-color: rgb(0,212,135)
}

.button-special {
  @extend .button
  background-color: rgb(254,148,96)
}
</style>
