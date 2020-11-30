import React from 'react';

const Plugin = props => {
	const { emitter } = props?.appContext;
	console.log(emitter);
	return <h1>Plugin</h1>;
};

export default Plugin;
