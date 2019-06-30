import React, { Component } from 'react'

export class Search extends Component {

    state = {
        text: '',
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchUsers(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        value={this.state.text} 
                        name="text" 
                        placeholder="Search users"
                        onChange={this.onChange}
                    />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clear}>Clear</button>}
            </div>
        )
    }
}

export default Search;
