import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount = async () => {
    const server = "http://localhost:3001";
    const allData = await axios.get(`${server}/all`);
    this.setState({
      data: allData.data,
    });
    console.log(this.state.data);
  };
  addFav = async (idx) => {
    const server = "http://localhost:3001";
    const obj = {
      name: this.state.data[idx].name,
      avg_price: this.state.data[idx].avg_price,
    };
    await axios.post(`${server}/addtofav`);
  };
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.state.data.map((item, idx) => {
            return (
              <Col>
                <Item idx={idx} item={item} addFav={this.addFav} />;
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default Home;
