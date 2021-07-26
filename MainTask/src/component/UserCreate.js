import React, { Component } from "react";
import NavBarManu from "./NavBarManu";
class UserCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      address: "",
      email: "",
      phnum: "",
      mailError: "",
      nameError: "",
      ageError: "",
      addressError: "",
      phnumError: "",
    };
  }
  valid() {
    if (!this.state.email.includes("@")) {
      this.setState({ mailError: "Please Enter Correct Mail" });
    }
    if (!this.state.name) {
      this.setState({ nameError: "Please Enter Your Name" });
    }
    if (!this.state.address) {
      this.setState({ addressError: "Please Enter Your Address" });
    }
    if (this.state.age.length <= 0) {
      this.setState({ ageError: "Please Enter Your Age " });
    }
    if (this.state.phnum.length !== 10) {
      this.setState({ phnumError: "Please Enter Your Phone  " });
    }
  }
  create() {
    this.setState({
      mailError: "",
      nameError: "",
      ageError: "",
      addressError: "",
      phnumError: "",
    });
    if (this.valid()) {
      alert("v");
    }
    fetch("http://localhost:3000/userData", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        alert("added data");
        window.location.href = "/list";
      });
    });
  }
  render() {
    return (
      <div>
        <NavBarManu />
        <h1>User Create Page</h1>

        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Enter Your Name "
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ age: event.target.value });
            }}
            placeholder="Enter Your Age  "
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            placeholder="Enter Your Address  "
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            placeholder="Enter Your Email "
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ phnum: event.target.value });
            }}
            placeholder="Enter Phone Number "
          />
          <br />
          <br />
          <button
            onClick={() => {
              this.create();
            }}
          >
            Add Data
          </button>
        </div>
      </div>
    );
  }
}

export default UserCreate;
