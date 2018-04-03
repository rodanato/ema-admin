import React, { Component } from 'react';
import { compose } from 'recompose';
import { Form, Text } from 'react-form';
import * as routes from 'constants/routes';
import { withRouter } from 'react-router-dom';

import { auth } from 'config/firebase';
import { Logger } from 'shared/utils';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';
import './sign-in.component.css'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    submittedValues: ''
  };

  onSubmit(submittedValues) {
    this.setState({ submittedValues });
    console.log(submittedValues);

    // e.preventDefault();
    //
    // const {
    //   history
    // } = this.props;
    //
    // auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(() => {
    //     Logger.log(`Logged In`);
    //     history.push(routes.HOME);
    //   })
    //   .catch(error => {
    //     Logger.error(`${error}`);
    //   });
  }



  handleInputChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    return (
      <div className={'columns is-centered'}>
        <Form onSubmit={submittedValues => onSubmit(submittedValues)}>
          {formApi => (
            <form onSubmit={formApi.submitForm}
                  className={'column is-half box login__container'}>
              <div className="columns is-multiline">
                <div className="column is-12">
                  <label htmlFor="user">Usuario</label>
                  <Text field="user"
                        id="user" />
                  {/*<input*/}
                    {/*className={'input'}*/}
                    {/*value={this.state.email}*/}
                    {/*onChange={e => this.handleInputChange(e)}*/}
                    {/*type="text"*/}
                    {/*name="email"*/}
                    {/*placeholder="Email"*/}
                  {/*/>*/}
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
          )}
        </Form>
      </div>
    );
  }
}

const authCondition = (authUser) => !authUser;

export default compose(
  withRouter,
  withAuthorization(authCondition),
)(SignIn);

export {
  SignIn,
};
