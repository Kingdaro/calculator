import 'should'
import {Store} from '../src/store'

describe('store', () => {
  let store
  beforeEach(() => {
    store = new Store()
  })

  describe('typeDigit', () => {
    it('adds a new operand if there are no operands', () => {
      store.typeDigit(5)
      store.state.operands[0].type.should.equal('number')
      store.state.operands[0].value.should.equal(5)
    })

    it('appends to the last number when necessary', () => {
      store.typeDigit(4)
      store.typeDigit(2)
      store.state.operands[0].type.should.equal('number')
      store.state.operands[0].value.should.equal(42)
    })
  })

  describe('typeOperator', () => {
    it('does not add an operand if there are no operands', () => {
      store.typeOperator('plus')
      store.state.operands.length.should.equal(0)
    })

    it('adds an operand if the last one is a number', () => {
      store.typeDigit(5)
      store.typeOperator('plus')
      store.state.operands.length.should.equal(2)
      store.state.operands[1].type.should.equal('operator')
      store.state.operands[1].which.should.equal('plus')
    })

    it('overwrites any previous operators', () => {
      store.typeDigit(5)
      store.typeOperator('plus')
      store.typeOperator('minus')
      store.state.operands.length.should.equal(2)
      store.state.operands[1].type.should.equal('operator')
      store.state.operands[1].which.should.equal('minus')
    })
  })
})
