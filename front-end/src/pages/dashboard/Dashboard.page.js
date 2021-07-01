import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button variant='info'>Add New Ticket</Button>
        </Col>
      </Row>
    </Container>
  );
};
