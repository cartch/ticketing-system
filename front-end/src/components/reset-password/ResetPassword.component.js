import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  loginOrReset,
  email,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={handleOnChange}
                placeholder='Enter Email'
                required
              />
            </Form.Group>

            <Button type='submit'>Reset password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='#!' onClick={() => loginOrReset('login')}>
            Login?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  loginOrReset: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
