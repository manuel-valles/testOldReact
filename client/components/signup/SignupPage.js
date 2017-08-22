import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component{
	render(){
		return (
			<div className="row">
				<div className="col-xs-4 col-xs-offset-4">
					<SignupForm />
				</div>
			</div>
		);
	}
}

export default SignupPage;