import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		this.setState({ [e.target.name]: e.target.value});
	}
	onSubmit(e){
		this.setState({errors:{}, isLoading:true});
		e.preventDefault();
		this.props.userSignupRequest(this.state).then(
			() => {},
			(err) => this.setState({errors: err.response.data, isLoading: false})
		);
	}

	render(){
		const {errors} = this.state;
		const options = map(timezones, (val, key) =>
			<option key={val} value={val}>{key}></option>
		);
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community!</h1>
				<div className={classnames("form-group", {'has-error': errors.username})}>
					<label className="control-label">Username</label>
					<input 
						type="text" 
						name="username" 
						className="form-control"
						onChange={this.onChange}
						value={this.state.username}
						/>
						{errors.username && <span className="help-block">{errors.username}</span>}
				</div>
				<div className={classnames("form-group", {'has-error': errors.email})}>
					<label className="control-label">Email</label>
					<input 
						type="email" 
						name="email" 
						className="form-control"
						onChange={this.onChange}
						value={this.state.email}
						/>
						{errors.email && <span className="help-block">{errors.email}</span>}
				</div>
				<div className={classnames("form-group", {'has-error': errors.password})}>
					<label className="control-label">Password</label>
					<input 
						type="password" 
						name="password" 
						className="form-control"
						onChange={this.onChange}
						value={this.state.password}
						/>
						{errors.password && <span className="help-block">{errors.password}</span>}
				</div>
				<div className={classnames("form-group", {'has-error': errors.passwordConfirmation})}>
					<label className="control-label">Password Confirmation</label>
					<input
						type="password" 
						name="passwordConfirmation" 
						className="form-control"
						onChange={this.onChange}
						value={this.state.passwordConfirmation}
						/>
						{errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
				</div>
				<div className={classnames("form-group", {'has-error': errors.timezone})}>
					<label className="control-label">Timezone</label>
					<select
						name="timezone" 
						className="form-control"
						onChange={this.onChange}
						value={this.state.timezone}
						>
						<option value="" disabled>Choose Your Timezone</option>
						{options}
					</select>
					{errors.timezone && <span className="help-block">{errors.timezone}</span>}
				</div>
				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
						Sign up
					</button>
				</div>
			</form>
		);
	}
}

SignupForm.proptypes = {
	userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;