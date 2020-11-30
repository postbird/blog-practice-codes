const emitter = {
	on: (key, handler) => {
		window.addEventListener(key, handler);
	},
	off: key => {
		window.removeEventListener(key);
	},
	emit: (key, data) => {
		const CustomEvent = window.CustomEvent;
		const evt = new CustomEvent(key, { detail: data });
		window.dispatchEvent(evt);
	},
};

export default emitter;
