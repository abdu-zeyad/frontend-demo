import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
export class Updateform extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleclose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue={this.props.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>average price</Form.Label>
                <Form.Control
                  type="text"
                  name="avg_price"
                  defaultValue={this.props.avg_price}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Updateform;
