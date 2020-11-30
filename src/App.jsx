import React from 'react';
import './App.css';
// import Test1 from './mods/Test';
import TestApp from './mods/TestApp';

import emitter from './emitter.new';

emitter.on('111x', () => {
	console.log('111x handle emit')
});

emitter.emit('111x');

function App() {
	return (
		<div className="App">
			<TestApp />
			<hr />
		</div>
	);
}

export default App;
