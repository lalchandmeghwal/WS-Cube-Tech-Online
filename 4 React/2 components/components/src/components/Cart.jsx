import React from 'react'
import { Component } from 'react'


class Cart extends Component {
    render() {
        return (
            <h1>
                {this.props.name}
                {this.props.age}
            </h1>
        )
    }
}

export default Cart
