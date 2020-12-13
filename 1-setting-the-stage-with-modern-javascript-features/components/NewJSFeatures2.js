import React, { Component } from "react"

class NewJSFeatures2 extends Component {
    state = {
        count: 0,
        greeting: 'Hello',
        age: 20
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        const { count, greeting, age } = this.state
        return (
            <div>
                <h1>{count} {greeting} {age}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default NewJSFeatures2