<template lang="pug">
.container
  .calculator
    .row
      .result.col-4 0
    .row
      .button-operator.col-1 +
      .button-operator.col-1 -
      .button-operator.col-1 *
      .button-operator.col-1 /
    .row
      .button-numeric.col-1 7
      .button-numeric.col-1 8
      .button-numeric.col-1 9
      .button-special.col-1.rowspan-2 C
    .row
      .button-numeric.col-1 4
      .button-numeric.col-1 5
      .button-numeric.col-1 6
    .row
      .button-numeric.col-1 1
      .button-numeric.col-1 2
      .button-numeric.col-1 3
      .button-special.col-1.rowspan-2 &equals;
    .row
      .button-special.col-1 &plusmn;
      .button-numeric.col-1 0
      .button-special.col-1 &period;
</template>

<script>
export default {}
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
  transition: 0.3s

  &:hover {
    opacity: 0.7
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
