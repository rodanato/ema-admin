import React, { Component } from 'react';
import { compose } from 'recompose';
import { Form, Text } from 'react-form';
import * as routes from 'constants/routes';
import { withRouter } from 'react-router-dom';

import { auth } from 'config/firebase';
import { Logger } from 'shared/utils';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';
import './sign-in.component.css';

const passwordValidation = password => !password || password.trim() === '' ? 'Ingrese una contraseña válida' : null;
const userValidation = user => {
  if (!user || user.trim() === '') {
    return 'Ingrese una contraseña válida';
  } else if (!user.match(/^\s*?(.+)@(.+?)\s*$/)) {
    return 'Ingrese una contraseña válida';
  } else {
    return null;
  }
};

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    submittedValues: ''
  };

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
          Logger.error(`${error}`);
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
                          placeholder={'Usuario'}
                          id="user" />
                    <span className={'login__error'}>{ this.showError(formApi.errors, 'user') }</span>
                  </div>

                  <div className="column is-12 login__form-block">
                    <Text field="password"
                          validate={passwordValidation}
                          className={'input login__input'}
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
