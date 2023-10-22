import React, { Component } from "react";
import "./LS.css"; // Import the CSS file

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;

    // Add your signup logic here (e.g., sending data to a server).

    // For demonstration purposes, we'll simply log the data to the console.
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
  }

  render() {
    return (
      <div className="form-container">
        <h2 className="form-title">Signup Page</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;

