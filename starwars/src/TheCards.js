import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row
} from "reactstrap";

function TheCards({ name, eye, mass, gender, birthyear }) {
  return (
    <div>
      <Row>
        <Col sm="12">
          <Card className = "card">
            <CardHeader className = "card-header-footer"><h1>My Name is: {name}!</h1></CardHeader>
            <CardBody>
              <CardTitle>My weight is: {mass} Kg</CardTitle>
              <CardText>My gender is: {gender}</CardText>
              <CardText>I was born: {birthyear}</CardText>
            </CardBody>
            <CardFooter className = "card-header-footer">My eye color is: {eye}</CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default TheCards;
