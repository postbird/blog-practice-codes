import React, { useEffect, useState, useContext } from 'react';
import myContext from './context';

const Test = ({ name, dispatchName, eventName, appContext }) => {
	const [value, setValue] = useState('');
	const [messageList, setMessageList] = useState([]);

	const { emitter } = useContext(myContext);
	console.log(emitter);

	useEffect(() => {
		emitter.on(eventName, data => {
			data && setMessageList([...messageList, data]);
		});
		return emitter.off(eventName);
	}, [messageList, eventName, emitter]);

	const handleInput = ev => {
		setValue(ev?.target?.value);
	};

	const handleClick = () => {
		const messageObject = {
			name,
			message: value,
		};
		setMessageList([...messageList, messageObject]);
		emitter.emit(dispatchName, messageObject);
	};

	return (
		<>
			<div>
				<input type="text" value={value} onInput={handleInput} />
				<button onClick={handleClick}>send message</button>
			</div>
			<hr />
			<ul>
				<h2>message list: </h2>
				{messageList.map((item, index) => (
					<li key={index}>
						{item.name}: {item.message}
					</li>
				))}
			</ul>
		</>
	);
};

export default Test;
