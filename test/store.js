import 'should'
import {Store} from '../src/store'

describe('store', () => {
  let store, operands
  beforeEach(() => {
    store = new Store()
    operands = store.state.operands
  })

  describe('typeDigit', () => {
    it('adds a new operand if there are no operands', () => {
      store.typeDigit(5)
      operands[0].type.should.equal('number')
      operands[0].value.should.equal(5)
    })

    it('appends to the last number when necessary', () => {
      store.typeDigit(4)
      store.typeDigit(2)
      operands[0].type.should.equal('number')
      operands[0].value.should.equal(42)
    })
  })

  describe('typeOperator', () => {
    it('does not add an operand if there are no operands', () => {
      store.typeOperator('plus')
      operands.length.should.equal(0)
    })

    it('adds an operand if the last one is a number', () => {
      store.typeDigit(5)
      store.typeOperator('plus')
      operands.length.should.equal(2)
      operands[1].type.should.equal('operator')
      operands[1].which.should.equal('plus')
    })

    it('overwrites any previous operators', () => {
      store.typeDigit(5)
      store.typeOperator('plus')
      store.typeOperator('minus')
      operands.length.should.equal(2)
      operands[1].type.should.equal('operator')
      operands[1].which.should.equal('minus')
    })
  })

  describe('backspace', () => {
    it('does nothing if there are no operands', () => {
      store.backspace()
      operands.length.should.equal(0)
    })

    it('backspaces single digits', () => {
      store.typeDigit(4)
      store.typeDigit(2)
      operands.length.should.equal(1)

      store.backspace()
      operands.length.should.equal(1)
      
      const last = store.getLastOperand()
      last.type.should.equal('number')
      last.value.should.equal(4)
    })

    it('backspaces operators', () => {
      store.typeDigit(2)
      store.typeOperator('plus')
      store.backspace()

      operands.length.should.equal(1)
      const last = store.getLastOperand()
      last.type.should.equal('number')
      last.value.should.equal(2)
    })
  })
})
