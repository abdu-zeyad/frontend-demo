import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
export class Item extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <p>name={this.props.item.name}</p>
            </Card.Title>
            <Card.Text>
              <p>avg_price={this.props.item.avg_price}</p>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => this.props.addFav(this.props.idx)}
            >
              add to fav
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Item;
