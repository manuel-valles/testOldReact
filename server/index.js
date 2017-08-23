// Run express server
import express from 'express';
// Path for the HTML file
import path from 'path';
// BodyParser for Server Validation
import bodyParser from 'body-parser';

// Import webpack; its Middleware for bundling; and the config of the compiler
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
// Import webpackHotMiddleware for auto-refreshing
import webpackHotMiddleware from 'webpack-hot-middleware';

// Import the variable users from routes
import users from './routes/users';

// Initialize out app as express. Post request to users.
let app = express();

// Json middleware for the post request
app.use(bodyParser.json());
// Use route to create your user records
app.use('/api/users', users);

// Use the Middleware package that takes a compiler
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));
//  Use HotMiddleware
app.use(webpackHotMiddleware(compiler));


// Get all routes with an error function
app.get('/*', (req, res)=>{
	res.sendFile(path.join(__dirname, './index.html'));
});

// Listen to some port!
app.listen(3000, () => console.log('Running on localhost:3000'));