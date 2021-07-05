import axios from "axios";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import Updateform from "./Updateform";

export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favArr: [],
      show: false,
      index: -1,
      name: "",
      avg_price: "",
    };
  }
  componentDidMount = async () => {
    const server = "http://localhost:3001";
    const favData = await axios.get(`${server}/getFav`);
    console.log(favData.data);
    this.setState({
      favArr: favData.data,
    });
    console.log(this.state.favArr);
  };
  Delete = async (id) => {
    console.log(id);
    const server = "http://localhost:3001";
    const newArray = await axios.delete(`${server}/delete?id=${id}`);
    this.setState({
      favArr: newArray.data,
    });
  };
  showupdateform = (idx) => {
    this.setState({
      show: true,
      index: idx,
      name: this.state.favArr[idx].name,
      avg_price: this.state.favArr[idx].avg_price,
    });
    console.log(idx);
  };
  handleclose = () => {
    this.setState({
      show: false,
    });
  };
  updateData = async (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.name.value,
      avg_price: e.target.avg_price.value,
      id: this.state.favArr[this.state.index]["_id"],
    };
    const server = "http://localhost:3001";

    const NewDataa = await axios.put(`${server}/update`, obj);
    this.setState({
      favArr: NewDataa.data,
      show: false,
    });
    console.log(NewDataa.data);
  };
  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {this.state.favArr.map((item, idx) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.avg_price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => this.showupdateform(idx)}
                    >
                      update
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => this.Delete(item._id)}
                    >
                      delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Updateform
          show={this.state.show}
          handleclose={this.handleclose}
          name={this.state.name}
          avg_price={this.state.avg_price}
          updateData={this.updateData}
        />
      </div>
    );
  }
}

export default Favorite;
