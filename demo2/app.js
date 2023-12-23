const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3002;

app.use(morgan('dev'))

app.get('/employee-list', (req, res) => {
	let result = {
		id: 123,
		name: 'Demo employee 1',
	};

	res.status(200).json(result);
});

app.get('/employee-details', (req, res) => {
	let result = {
		id: 123,
		name: 'Demo employee 1',
		address: `Port ${port}`,
	};

	res.status(200).json(result);
});

app.listen(port, () => {
	console.log(`App is listening to port ${port}`);
});
