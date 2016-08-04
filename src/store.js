export class Store {
  constructor () {
    this.state = {
      operands: []
    }
  }

  addOperand (type, params) {
    this.state.operands.push(Object.assign({ type }, params))
  }

  getLastOperand () {
    const {operands} = this.state
    return operands[operands.length - 1]
  }

  clear () {
    this.state.operands = []
  }

  addNumber (value) {
    const last = this.getLastOperand()
    if (last && last.type === 'number') {
      last.value += value
    } else {
      this.addOperand('number', { value })
    }
  }

  addOperator (which) {
    const last = this.getLastOperand()
    if (last) {
      if (last.type === 'operator') {
        last.which = which
      } else {
        this.addOperand('operator', { which })
      }
    }
  }

  clear () {
    this.state.operands = []
  }

  getOperatorSymbol (which) {
    switch (which) {
      case 'plus': return '+'
      case 'minus': return '-'
      case 'times': return '&times;'
      case 'divide': return '&divide;'
    }
  }

  get result () {
    if (this.state.operands.length > 0) {
      return this.state.operands
        .map(op => {
          switch (op.type) {
            case 'number': return op.value
            case 'operator': return this.getOperatorSymbol(op.which)
          }
        })
        .join(' ')
    } else {
      return '0'
    }
  }
}

export const store = new Store()
export const state = store.state
