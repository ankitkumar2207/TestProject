import React, { Component } from "react";
import NavBarManu from "./NavBarManu";

//Creating Class Component

class Home extends Component {
  constructor() {
    super();
    // state init
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
  // Form Validation
  valid() {
    if (!this.state.email.includes("@")) {
      this.setState({ mailError: "Please Enter Correct Mail" });
    } else if (!this.state.name) {
      this.setState({ nameError: "Please Enter Your Name" });
    } else if (!this.state.address) {
      this.setState({ addressError: "Please Enter Your Address" });
    } else if (this.state.age.length <= 0) {
      this.setState({ ageError: "Please Enter Your Age " });
    } else if (this.state.phnum.length !== 10) {
      this.setState({ phnumError: "Please Enter Your Phone  " });
    } else {
      return true;
    }
  }
  // Calling Api For Post Data and redirect to thanku page
  create() {
    this.setState({
      mailError: "",
      nameError: "",
      ageError: "",
      addressError: "",
      phnumError: "",
    });
    if (this.valid()) {
      fetch("http://localhost:3000/userData", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      }).then((result) => {
        result.json().then((resp) => {
          alert("Response Submitted");
          window.location.href = "/thanks";
        });
      });
    }
  }
  render() {
    return (
      <div>
        {/* Navigation  */}
        <NavBarManu />
        {/* Navigation  */}
        {/* Form Title  */}
        <h2>Survey Form Please Submit Your Response </h2>
        {/* Form Title  */}
        <div>
          {/* Form  */}
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Enter Your Name "
          />
          <p className="Error_content"> {this.state.nameError}</p>

          <input
            type="number"
            onChange={(event) => {
              this.setState({ age: event.target.value });
            }}
            placeholder="Enter Your Age  "
          />
          <p className="Error_content">{this.state.ageError}</p>

          <input
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            placeholder="Enter Your Address  "
          />
          <p className="Error_content">{this.state.addressError}</p>

          <input
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            placeholder="Enter Your Email "
          />
          <p className="Error_content">{this.state.mailError}</p>

          <input
            type="number"
            onChange={(event) => {
              this.setState({ phnum: event.target.value });
            }}
            placeholder="Enter Phone Number "
          />
          <p className="Error_content">{this.state.phnumError}</p>

          <button
            onClick={() => {
              this.create();
            }}
          >
            Submit
          </button>
        </div>
        {/* Form  */}
      </div>
    );
  }
}

export default Home;
