import React from 'react';
import plugins from './plugins';
import emitter from '../emitter';

const appContext = { emitter };

const App = () => {
	const renderPlugin = plugin => {
		const { component, key } = plugin;
		return React.createElement(component, { appContext, key });
	};

	const renderPlugins = () => {
		return plugins.map(plugin => renderPlugin(plugin));
	};

	return <div>{renderPlugins()}</div>;
};

export default App;
