import React from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';
import PropTypes from 'prop-types';

class SignupPage extends React.Component{
	render(){
		const {userSignupRequest} = this.props;
		return (
			<div className="row">
				<div className="col-xs-4 col-xs-offset-4">
					<SignupForm userSignupRequest={userSignupRequest}/>
				</div>
			</div>
		);
	}
}

SignupForm.proptypes = {
	userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignupPage);
// We can also use export default connect((state) => {return{}}, {userSignupRequest})(SignupPage);