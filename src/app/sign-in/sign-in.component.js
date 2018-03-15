
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { auth } from '../../config/firebase';

class SignIn extends Component {
  email;
  password;

  constructor(props) {
    super(props);
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    // auth.doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log('logged in');
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //   });

  };

  render() {
    return (
      <form onSubmit={() => this.onSubmit}>
        <h1>SignIn</h1>
        <input
          value={this.email}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={this.password}
          type="password"
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
