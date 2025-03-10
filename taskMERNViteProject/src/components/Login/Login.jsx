import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Login.css'; // Import custom CSS if needed
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = () => {
  const navigate = useNavigate();
  const [cookies,setCookie,removeCookie]=useCookies(['UserName']);
  const formik = useFormik({
    initialValues: {
      Email: '',
      UserName:'',
      Password: ''
    },
    onSubmit: (user) => {
      axios.get(`http://127.0.0.1:5000/users`)
        .then(Response => {
          // console.log(Response.data);
          const foundUser = Response.data.find(item => item.Email === user.Email)
          // console.log(foundUser);

          if (user) //if !(undefined)
          {
            if ((user.UserName === foundUser.UserName)&&(user.Password === foundUser.Password)) {
              setCookie('UserName',foundUser.UserName)
              navigate('/dashboard')
            }
            else{
              alert('Invalid Email or Password')
            }
          }
        })
    }
  });

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <form className="border p-4 rounded shadow-sm bg-white" onSubmit={formik.handleSubmit}>
            <h3 className="text-center mb-4">Log In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name='Email'
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-3">
              <label>UserName</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter UserName"
                name='UserName'
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name='Password'
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                  name='RememberMe'
                  onChange={formik.handleChange}
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
              Don't have an account? <a href="/signup" onClick={() => { navigate('/SignUp') }}>Register</a>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
