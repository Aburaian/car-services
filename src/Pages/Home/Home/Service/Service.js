import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Service = ({ service }) => {
  const { id, price, img, description, name } = service;
  const navigate = useNavigate();
  const handleServiceId = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-4">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <span className="fw-bold">Price:</span> ${price}
          </Card.Text>
          <Button onClick={() => handleServiceId(id)} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
