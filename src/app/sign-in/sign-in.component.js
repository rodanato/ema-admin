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
    notFound: '*El correo que has ingresado no existe'
  },
  password: {
    default: '*Ingrese una contraseña válida',
    wrong: '*Tu contraseña es incorrecta'
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
  state = {
    email: '',
    password: '',
    forceUserError: false,
    forcePasswordError: false
  };

  handleError(errorCode) {
    if (errorCode === 'auth/user-not-found') {
      this.setState({forceUserError: true});
    }
    if (errorCode === 'auth/wrong-password') {
      this.setState({forcePasswordError: true});
    }
  }

  showError(errors, field, forcedError) {
    if (forcedError && field === 'user') {
      return errorsMap[field].notFound;
    }
    if (forcedError && field === 'password') {
      return errorsMap[field].wrong;
    }
    return (errors && errors[field]) ? errors[field] : null;
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

  render() {
    return (
      <section className="section login__section">
        <img src={process.env.PUBLIC_URL + '/images/logo.svg'}
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
                          onChange={() => this.setState({forceUserError: false})}
                          id="user"/>
                    <span
                      className={'login__error'}>{this.showError(formApi.errors, 'user', this.state.forceUserError)}</span>
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
                      className={'login__error'}>{this.showError(formApi.errors, 'password', this.state.forcePasswordError)}</span>
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
