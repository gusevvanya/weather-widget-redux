import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from './common/TextField';
import Button from './common/Button';

class SearchForm extends Component {
	state = {
		searchValue: '',
	};

	onSearchSubmit = (e) => {
		e.preventDefault();
		
		this.props.onSearchSubmit(this.state.searchValue);
		this.setState({
			searchValue: '',
		});
	};

	setSearchValue = (value) => {
		this.setState({
			searchValue: value,
		});
	};

	render() {
		return (
			<form 
				className="search"
				onSubmit={this.onSearchSubmit}
			>	
				<TextField
					onTextFieldChange={this.setSearchValue}
					value={this.state.searchValue}
				/>
				<Button>
					Search
				</Button>
			</form>	
		);
	};  
};

SearchForm.propTypes = {
	onSearchSubmit: PropTypes.func.isRequired,
}
export default SearchForm;