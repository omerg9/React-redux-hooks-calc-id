import React, { forwardRef } from 'react';

const FormInput = forwardRef(({ error, ...restProps }, ref) => {

	const wrapperClass = `field ${error ? 'error' : ''}`;
	const errorClass = `ui pointing below prompt label ${error ? 'visible' : ''}`;
	const errorMessage = error || 'Input must be a number';

	return (
		<div className={wrapperClass}>
			<div className={errorClass}>{errorMessage}</div>
			<div className="ui input">
				<input
					ref={ref}
					{...restProps}
				/>
			</div>
		</div>
	);
});

export default FormInput;
export { FormInput };
