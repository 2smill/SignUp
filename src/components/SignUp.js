
import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;

    // Add your sign-up logic here, e.g., make an API request to create a new user

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  render() {
    const { email, password, confirmPassword } = this.state;

    return (
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
