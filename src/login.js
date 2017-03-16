import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="main registrationform">
          <h1 className="formheading">Login</h1>
          <form>
            <fieldset className="formfieldset" name="Login">
              <label className="reglabel" for="email">Email</label>
              <input className="reginput" type="email" name="email" placeholder="foobar@inc.com" required />
              <label className="reglabel">Password</label>
              <input className="reginput" type="password" name="password" required />
              <div className="regcheck">
                <input className="reginput submit" type="submit"/>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
