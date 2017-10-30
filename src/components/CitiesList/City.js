import React from 'react';
import PropTypes from 'prop-types';

const City = (props) => {
	const onCityClick = (e) => {
		e.preventDefault();
		props.onCityClick(props.name);
	};

	const onDeleteCityClick = (e) => {
		e.stopPropagation();
		props.onDeleteCityClick(props.name);
	};

	return (
		<a 
			className={ props.className }
			onClick={onCityClick}
		>
			<span 
				className="close"
				onClick={onDeleteCityClick}
			>
				x
			</span>
			{props.name}
		</a>
	);   
};

City.propTypes = {
	name: PropTypes.string.isRequired,
	onCityClick: PropTypes.func.isRequired,
	onDeleteCityClick: PropTypes.func.isRequired,
	active: PropTypes.bool,
	className: PropTypes.string.isRequired,
};

export default City;
