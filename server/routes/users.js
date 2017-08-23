// Express to create new routes
import express from 'express';

// We created the signup.js for the validation
import validateInput from '../shared/validations/signup';

let router = express.Router();


router.post('/', (req, res) => {
	const {errors, isValid} = validateInput(req.body);

	if(!isValid){
		res.status(400).json(errors);
	}
});

export default router;