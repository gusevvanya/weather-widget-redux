import React from 'react';

const TextField = ({onTextFieldChange, value}) => {
	const textFieldChangeHandler = (e) => {
		onTextFieldChange(e.target.value);
	}
	return (		
		<input 
			type='text'
			value={value}
			onChange={textFieldChangeHandler}
		/>
	);  
};

export default TextField;