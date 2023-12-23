const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;

app.use(morgan('dev'))

app.get('/user-list', (req, res) => {
	let result = {
		id: 123,
		name: 'Demo user 1',
	};

	res.status(200).json(result);
});

app.get('/user-details', (req, res) => {
	let result = {
		id: 123,
		name: 'Demo user 1',
		address: `Port ${port}`,
	};

	res.status(200).json(result);
});

app.listen(port, () => {
	console.log(`App is listening to port ${port}`);
});
