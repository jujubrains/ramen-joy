import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};


    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };


    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                <h1>Videos • How to Make Ramen</h1>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;