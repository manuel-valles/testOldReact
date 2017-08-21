// Run express server
import express from 'express';
// Path for the HTML file
import path from 'path';

// Initialize out app as express
let app = express();

// Get all routes with an error function
app.get('/*', (req, res)=>{
	res.sendFile(path.join(__dirname, './index.html'));
});

// Listen to some port!
app.listen(3000, () => console.log('Running on localhost:3000'));