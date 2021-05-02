import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      listCustomer: [],
    };
  }

  componentDidMount() {
    console.log("Mounted Component List");
    axios
      .get("http://localhost:8080/api/customer/list")
      .then((response) => {
        console.log(response.data);
        this.setState({ listCustomer: response.data.data });
      })
      .catch((error) => {
        alert("Error ==> " + error);
      });
  }

  render() {
    return (
      <section>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listCustomer.map((data, idx) => {
              return (
                <tr key={data.name + data.address}>
                  <th scope="row">{idx + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link
                      to={"/customer/edit/" + data.id}
                      class="btn btn-light"
                    >
                      {" "}
                      Edit{" "}
                    </Link>
                    <Link to="#" class="btn btn-danger">
                      {" "}
                      Delete{" "}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}
