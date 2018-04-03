
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from 'constants/routes';

import { auth } from 'config/firebase';
import './sign-in.component.css'

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
      <div className={'columns is-centered'}>
        <form onSubmit={e => this.onSubmit(e)}
              className={'column is-half box login__container'}>
          <div className="columns is-multiline">
            <div className="column is-12">
              <h1>SignIn</h1>
              <input
                className={'input'}
                value={this.state.email}
                onChange={e => this.handleInputChange(e)}
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="column is-12">
              <input
                className={'input'}
                value={this.state.password}
                onChange={e => this.handleInputChange(e)}
                type="password"
                name="password"
                placeholder="Password"
              />
              <button type="submit">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);

export {
  SignIn,
};
