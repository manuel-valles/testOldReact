// Run express server
import express from 'express';
// Path for the HTML file
import path from 'path';
// Import webpack; its Middleware for bundling; and the config of the compiler
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

// Initialize out app as express
let app = express();

// Use the Middleware package that takes a compiler
app.use(webpackMiddleware(webpack(webpackConfig)));

// Get all routes with an error function
app.get('/*', (req, res)=>{
	res.sendFile(path.join(__dirname, './index.html'));
});

// Listen to some port!
app.listen(3000, () => console.log('Running on localhost:3000'));