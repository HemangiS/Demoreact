import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      mobile: '',
      country: 'india',
      gender: 'male',
      dob: '',
      password: '',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
     [name]: event.target.value
    });

    console.log("state---->", this.state, name);

  }

  isValidate() {
    var username = document.registrationform.username.value.trim();
    var password = document.registrationform.password.value.trim();
    var mobile = document.registrationform.mobile.value.trim();

    if(username.length < 1) {
      document.getElementById("usernameerr").innerHTML = "Please enter your name";
    } else {
      document.getElementById("usernameerr").innerHTML = "";
    }

    if(mobile.length !== 10) {
      document.getElementById("mobileerr").innerHTML = "Plaese enter valid mobile no";
    } else {
      document.getElementById("mobileerr").innerHTML = "";
    }

    if(password.length<6){
      document.getElementById("passworderr").innerHTML=
      "Password must be at least 6 char long";
    } else {
      document.getElementById("passworderr").innerHTML = "";
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A email was submitted: ' + this.state.email + '\nA password was submitted: ' + this.state.password);
    this.isValidate();
  }

  render() {
    console.log(this.state, "-----")
    return (
      <div>
        <div className="main registrationform">
          <h1 className="formheading">Registration</h1>
          <form name="registrationform" onSubmit={this.handleSubmit} >
            <fieldset className="formfieldset" name="Registration">
              <label className="reglabel" htmlFor="name">Name</label>
              <input
                value={this.state.username}
                onChange={this.handleChange}
                className="reginput"
                type="text"
                id="username"
                name="username"
                placeholder="Jone Doe"
                required
              />
              <span id="usernameerr"></span>
              <label className="reglabel" htmlFor="email">Email</label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                className="reginput"
                type="email"
                id="email"
                name="email"
                placeholder="foobar@inc.com"
                required
              />
              <span id="emailerr"></span>
              <label className="reglabel" htmlFor="mobile">Mobile</label>
              <input
                value={this.state.mobile}
                onChange={this.handleChange}
                className="reginput"
                type="number"
                id="mobile"
                name="mobile"
                placeholder="Please enter a ten digit phone number"
                required
              />
              <span id="mobileerr"></span>
              <div className="countrydesign">
              <label className="reglabel country">Country</label>
                {/*
                  <input
                  value={this.state.country}
                  onChange={this.handleChange}
                  className="countryselect"
                  id="country"
                  name="country"
                  type="text"
                  list="country"
                />
                <datalist id="country">
                  <option value="india">India</option>
                  <option value="china">China</option>
                  <option value="australia">Australia</option>
                </datalist>*/}
                <select value={this.state.value} onChange={this.handleChange} className="countryselect" name="country">
                  <option value="india">India</option>
                  <option value="china">China</option>
                  <option value="australia">Australia</option>
                </select>
              </div>
              <label className="reglabel gender">Gender</label>
                <input
                  onChange={this.handleChange}
                  checked={this.state.gender === 'male'}
                  className="formgender"
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                />
                  <small>Male</small>&nbsp;
                <input
                  onChange={this.handleChange}
                  checked={this.state.gender === 'female'}
                  className="formgender"
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                />
                  <small>Female</small><br/>
              <label className="reglabel dob">DOB</label>
              <input
                value={this.state.dob}
                onChange={this.handleChange}
                className="reginput dobdate"
                type="date"
                name="dob"
                id="dob"
              />
              <label className="reglabel">Password</label>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                className="reginput"
                type="password"
                name="password"
                id="password"
                required
              />
              <span id="passworderr"></span>
              <div className="regcheck">
                <input className="formcheckbox" type="checkbox" name="agreement" /> I accept the terms and conditions.
              </div>

              <input className="reginput submit" type="submit" value="Register"/>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
