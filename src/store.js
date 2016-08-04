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

  addNumberOperand (value) {
    const last = this.getLastOperand()
    if (last && last.type === 'number') {
      last.value = window.parseInt(last.value.toString() + value.toString())
    } else {
      this.addOperand('number', { value })
    }
  }

  addSymbolOperand (which) {
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

  removeLastOperand () {
    const last = this.getLastOperand()
    if (last) {
      switch (last.type) {
        case 'number':
          const head = last.value.toString().slice(0, -1)
          if (head.length > 0) {
            last.value = window.parseInt(head)
          } else {
            this.state.operands.pop()
          }
          break

        default:
          this.state.operands.pop()
      }
    }
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
