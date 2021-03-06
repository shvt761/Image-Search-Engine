import React, { Component } from 'react'
import './Searchbar.css'
export default class Searchbar extends Component {
    state = {val:''}
    onInputChange = (event) => {
        this.setState({ val: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.val);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="flexContainer">
                    <label htmlFor="search"><h2>Image Search</h2></label>
                    <input
                     className="inputStyle"
                     type='text'
                     value={this.state.val}
                     onChange={this.onInputChange}
                     />
                </form>
            </div>
        )
    }
}