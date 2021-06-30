import React, { Component } from "react";
import axios from "axios";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
    };
  }
  componentDidMount = () => {
    let URL = `https://private-anon-12ca5f39c4-carsapi1.apiary-mock.com/manufacturers`;
    axios.get(URL).then((result) => {
      let carsData = result.data;

      this.setState({
        Data: carsData,
      });
    });
  };
  render() {
    return (
      <div>
        {this.state.Data.map((item) => {
          return <h1>{item.name}</h1>;
        })}
      </div>
    );
  }
}

export default Home;
