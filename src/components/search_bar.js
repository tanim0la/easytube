import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
 
        this.state = { term: '' };
    }

    render() {
        //console.log(this.state.term)
        return (
            <div className='search-bar'>
                <input 
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}
                    placeholder=' Search...'
                    />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term)
    }


}


export default SearchBar;