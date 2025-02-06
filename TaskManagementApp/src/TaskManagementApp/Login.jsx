import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Login.css'; // Import custom CSS if needed

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <form className="border p-4 rounded shadow-sm bg-white">
            <h3 className="text-center mb-4">Log In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
              Log In
              </button>
            </div>
            <p className="forgot-password ">
              Forgot <a href="/forgotpassword">Password?</a>
            </p>
            <p className="forgot-password ">
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
