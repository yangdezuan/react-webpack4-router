import React, { Component } from "react"

class Input extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: this.props.defaultValue || "",
    }

    this.changeHandler = this.changeHandler.bind(this)
  }

  get displayValue() {
    const key = "value"

    const internalKey = "value"

    return this.props[key] !== undefined
      ? this.props[key]
      : this.state[internalKey]
  }

  handleChange(newVal) {
    if (newVal === this.state.value) {
      return
    }
    console.log(newVal)

    this.setState(
      {
        value: newVal,
      },

      () => {
        this.props.onChange && this.props.onChange(this.props.name, newVal)
      }
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const controlledValue = nextProps.defaultValue

    if (controlledValue !== undefined && controlledValue !== this.state.value) {
      this.setState(
        {
          value: controlledValue,
        },

        () => {
          this.props.onChange &&
            this.props.onChange(nextProps.name, controlledValue)
        }
      )
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== undefined) {
      return nextProps.value !== this.props.value
    }

    return nextState.value !== this.state.value
  }

  changeHandler(e) {
    const val = e.target.value
    this.handleChange(val)
  }
  search() {
    const inpVal = this.input.value
    console.log(this.state.value)
    // alert(inpVal)
  }
  render() {
    return (
      <div>
        <input
          className="editor"
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          value={this.displayValue}
          onChange={this.changeHandler}
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.search.bind(this)}>Click</button>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

export default Input
