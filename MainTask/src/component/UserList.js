import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBarManu from "./NavBarManu";

//Created Class Component

class UserList extends Component {
  constructor() {
    super();
    //state init
    this.state = {
      list: null,
      searchData: null,
      noData: false,
    };
  }
  //Calling API For Get Data Form backend
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch("http://localhost:3000/userData").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  //Calling API For Delete Data
  delete(id) {
    fetch("http://localhost:3000/userData/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Delete data Once");
        this.getData();
      });
    });
  }
  // Calling API For Search Data
  search(key) {
    fetch("http://localhost:3000/userData?q=" + key).then((data) => {
      data.json().then((resp) => {
        if (resp.length > 0) {
          this.setState({ searchData: resp, noData: false, list: null });
        } else {
          this.setState({ noData: true, searchData: null });
        }
      });
    });
  }

  render() {
    return (
      <div>
        {/* Navigation  */}
        <NavBarManu />
        {/* Title */}
        <h1>User List Page</h1>
        <div>
          {/* Search Event  */}
          <input
            type="text"
            onChange={(event) => this.search(event.target.value)}
          />
          {/* IF Data are there then work */}
          {this.state.searchData ? (
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th> Name</th>
                    <th>Age</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.searchData.map((item, i) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.phnum}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>

                      <td>
                        <Link to={"/update/" + item.id}>Edit</Link>
                        <span onClick={() => this.delete(item.id)}>Delete</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            ""
          )}
          {/* Else Data Not Found  */}
          {this.state.noData ? <h2>No Data Found</h2> : null}
        </div>
        <div>
          {/* Display Data list  */}
          {this.state.list ? (
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th> Name</th>
                    <th>Age</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((item, i) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.phnum}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>
                        <Link to={"/update/" + item.id}>Edit</Link>
                        <span onClick={() => this.delete(item.id)}>Delete</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <div>
              {this.state.searchData && this.state.noData ? null : (
                <h2>Please Wait ...</h2>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserList;
