import React, { Component } from 'react';
import { compose } from 'recompose';
import { Form, Text } from 'react-form';
import * as routes from 'constants/routes';
import { withRouter } from 'react-router-dom';

import { auth } from 'config/firebase';
import { Logger } from 'shared/utils';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';
import './sign-in.component.css';

let forceUserError = false;
let forcePasswordError = false;

const passwordValidation = password => {
  console.log(1);
  if (forcePasswordError) {
    return 'Ingrese una contraseña válida';
  }
  if (!password || password.trim() === '') {
   return 'Ingrese una contraseña válida';
  }
};
const userValidation = user => {
  console.log(1);
  if (forceUserError) {
    return 'Usuario no encontrado';
  }
  if (!user || user.trim() === '') {
    return 'Ingrese una contraseña válida';
  }
  if (!user.match(/^\s*?(.+)@(.+?)\s*$/)) {
    return 'Ingrese una contraseña válida';
  }

  return null;
};

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleError(errorCode) {
    if (errorCode === 'auth/user-not-found') {
      forceUserError = true;
    }
    if (errorCode === 'auth/wrong-password') {
      forcePasswordError = true;
    }
  }

  onSubmit(submittedValues) {
    const {
      history
    } = this.props;

    if (submittedValues.user &&
        submittedValues.password) {
      auth.doSignInWithEmailAndPassword(submittedValues.user, submittedValues.password)
        .then(() => {
          Logger.log(`Logged In`);
          history.push(routes.HOME);
        })
        .catch(error => {
          this.handleError(error.code);

          Logger.error(`
            Error code: ${error.code}
            Error message: ${error.message}
          `);
        });
    }
  }

  showError(errors, field) {
    return (errors && errors[field]) ? errors[field] : null;
  }

  render() {
    return (
      <section className="section login__section">
        <img src={ process.env.PUBLIC_URL + '/images/logo.svg'}
             className={'login__logo'}
             alt='Logo de ema'/>
        <div className={'columns is-centered'}>
          <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}
                className={'login__form'}>
            {formApi => (
              <form onSubmit={formApi.submitForm}
                    className={'column is-6'}>
                <div className="columns is-multiline">
                  <div className="column is-12 login__form-block">
                    <Text field="user"
                          validate={userValidation}
                          className={'input login__input'}
                          onChange={() => forceUserError = false}
                          placeholder={'Usuario'}
                          id="user" />
                    <span className={'login__error'}>{ this.showError(formApi.errors, 'user') }</span>
                  </div>

                  <div className="column is-12 login__form-block">
                    <Text field="password"
                          validate={passwordValidation}
                          className={'input login__input'}
                          onChange={() => forcePasswordError = false}
                          placeholder={'Contraseña'}
                          type={'password'}
                          id="Password" />
                    <span className={'login__error'}>{ this.showError(formApi.errors, 'password') }</span>
                  </div>

                  <div className="column is-12">
                    <button className={'button ema-btn--success is-fullwidth login__submit'}
                            type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Form>
        </div>
      </section>
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
