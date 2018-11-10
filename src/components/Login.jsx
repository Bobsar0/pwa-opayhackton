import React from 'react';
import {NavLink} from 'react-router-dom';

const Login = () => {
  return (
    <div class="row login">
        <div class="col-md-7"></div>
          <div class="col-md-5">
            <form class="form login-form">               
              <span>
                  <h3>Welcome</h3>
              </span>

              <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" required></input>
              </div>

              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" required></input>
              </div>

              <button class="btn btn-succcess"></button>
            </form>

            <div class="">
                <span>Don't have an accout? <NavLink to="/signup">Sign Up</NavLink></span>
            </div>
        </div>
    </div>
  );
};

export default Login;
