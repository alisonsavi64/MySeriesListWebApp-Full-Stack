const express = require('express');

const cors = require('cors');

const app = express();

const port = 8000;

const seriesRouter = require('./routes/series');

app.use(express.json())

app.use(cors({
	origin: '*'
}))

app.use('/api/series', seriesRouter);


app.listen(port, () => {console.log(`Server is listening on port ${port}`)});