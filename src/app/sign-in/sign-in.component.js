import React, {Component} from 'react';
import {compose}          from 'recompose';
import {Form, Text}       from 'react-form';
import * as routes        from 'constants/routes';
import {withRouter}       from 'react-router-dom';

import {auth}            from 'config/firebase';
import {Logger}          from 'shared/utils';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';
import './sign-in.component.css';

const errorsMap = {
  user: {
    default: '*Ingrese un usuario válido',
    notFound: '*Tu usuario y/o contraseña son incorrectos'
  },
  password: {
    default: '*Ingrese una contraseña válida',
    wrong: '*Tu usuario y/o contraseña son incorrectos'
  }
};

const passwordValidation = password => {
  if (!password || password.trim() === '') {
    return errorsMap.password.default;
  }
};
const userValidation = user => {
  if (!user || user.trim() === '') {
    return errorsMap.user.default;
  }
  if (!user.match(/^\s*?(.+)@(.+?)\s*$/)) {
    return errorsMap.user.default;
  }

  return null;
};

class SignIn extends Component {
  errorCode = '';

  state = {
    email: '',
    password: '',
    forceUserError: false,
    forcePasswordError: false
  };

  handleError(errorCode) {
    this.errorCode = errorCode;

    if (errorCode === 'auth/user-not-found') {
      return this.setState({forcePasswordError: true});
    }
    if (errorCode === 'auth/invalid-email') {
      return this.setState({forceUserError: true});
    }
    if (errorCode === 'auth/wrong-password') {
      return this.setState({forcePasswordError: true});
    }
  }

  showError(errors, forcedError, field) {
    if (forcedError) {
      if (this.errorCode === 'auth/user-not-found') {
        return errorsMap.user.notFound;
      }
      if (this.errorCode === 'auth/invalid-email') {
        return errorsMap.user.default;
      }
      if (this.errorCode === 'auth/wrong-password') {
        return errorsMap.password.wrong;
      }
    }

    return (errors && errors[field]) ? errors[field] : null;
  }

  onSubmit(submittedValues) {
    this.setState({forceUserError: false});
    this.setState({forcePasswordError: false});

    const {
      history
    } = this.props;

    if (submittedValues.user &&
      submittedValues.password) {
      auth.doSignInWithEmailAndPassword(submittedValues.user.toLowerCase(), submittedValues.password)
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

  render() {
    return (
      <section className="section login__section">
        <img src={process.env.PUBLIC_URL + '/images/logo.svg'}
             className={'login__logo'}
             alt='Logo de ema'/>
        <div className={'columns is-centered'}>
          <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
            {formApi => (
              <form onSubmit={formApi.submitForm}
                    className={'column is-6 login__form'}>
                <div className="columns is-multiline">
                  <div className="column is-12 login__form-block">
                    <Text field="user"
                          validate={userValidation}
                          className={'input login__input'}
                          placeholder={'Usuario'}
                          onChange={() => this.setState({forceUserError: false})}
                          id="user"/>
                    <span
                      className={'login__error'}>{this.showError(formApi.errors, this.state.forceUserError, 'user')}</span>
                  </div>

                  <div className="column is-12 login__form-block">
                    <Text field="password"
                          validate={passwordValidation}
                          className={'input login__input'}
                          placeholder={'Contraseña'}
                          onChange={() => this.setState({forcePasswordError: false})}
                          type={'password'}
                          id="Password"/>
                    <span
                      className={'login__error'}>{this.showError(formApi.errors, this.state.forcePasswordError, 'password')}</span>
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
