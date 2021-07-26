import React, { Component } from "react";
import NavBarManu from "./NavBarManu";

class UserUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      age: null,
      address: null,
      email: null,
      phnum: null,
      id: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/userData/" + this.props.match.params.id).then(
      (response) => {
        response.json().then((result) => {
          console.warn(result);
          this.setState({
            name: result.name,
            age: result.age,
            address: result.address,
            phnum: result.phnum,
            id: result.id,
            email: result.email,
          });
        });
      }
    );
  }
  update() {
    fetch("http://localhost:3000/userData/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        alert("Update data");
        window.location.href = "/list";
      });
    });
  }
  render() {
    return (
      <div>
        <NavBarManu />
        <h1>User Update Page</h1>
        <input
          onChange={(event) => {
            this.setState({ id: event.target.value });
          }}
          placeholder="Enter Your Name "
          value={this.state.id}
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
          placeholder="Enter Your Name "
          value={this.state.name}
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ age: event.target.value });
          }}
          placeholder="Enter Your Age  "
          value={this.state.age}
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ address: event.target.value });
          }}
          placeholder="Enter Your Address  "
          value={this.state.address}
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
          placeholder="Enter Your Email "
          value={this.state.email}
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ phnum: event.target.value });
          }}
          placeholder="Enter Phone Number "
          value={this.state.phnum}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.update();
          }}
        >
          Update Data
        </button>
      </div>
    );
  }
}

export default UserUpdate;
