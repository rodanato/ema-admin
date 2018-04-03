
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from 'constants/routes';

import { auth } from 'config/firebase';


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  onSubmit(e) {
    e.preventDefault();

    const {
      history
    } = this.props;

    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('logged in');
        history.push(routes.HOME);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  handleInputChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <h1>SignIn</h1>
        <input
          value={this.state.email}
          onChange={e => this.handleInputChange(e)}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          value={this.state.password}
          onChange={e => this.handleInputChange(e)}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

export default withRouter(SignIn);

export {
  SignIn,
};
