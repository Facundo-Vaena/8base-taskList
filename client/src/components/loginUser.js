import React, { Component } from 'react';

import {Container, StyledInput, StyledButton, LogoutButton} from '../style/loginStyle';
import { withUserLogin } from "../graphql";
import Header from "./header";
import Main from "./main";


export class LoginUser extends Component{
    state = { email: "", password: "", task: "", loading: false};
  
    
  
    render() {
      var response = undefined
      const { loginUser } = this.props;
      const loginFunction = async () => {
          this.setState({task: '', loading: true})
          response = await loginUser({email: this.state.email, password: this.state.password})
          response && response.data.userLogin.success ? this.setState({task: true, loading: false}) : this.setState({task: false, loading: false})
      }
      return (
        <Container>
        {
          this.state.task ? 
          <div>
            <LogoutButton onClick={()=>this.setState({email: '', password: '', task: ''})}>Logout</LogoutButton>
            <h2>Welcome {this.state.email.split('@')[0]}!</h2>
          </div> :
          <>
            <h3>Login</h3>
            <StyledInput  name="email" size='large' onChange={(e) => this.setState({...this.state, email: e.target.value})} value={this.state.email} placeholder="Email" />
  
            <StyledInput
              name="password"
              onChange={(e) => this.setState({...this.state, password: e.target.value})}
              value={this.state.password}
              type="password"
              placeholder="Password"
            
            />
            <StyledButton type='submit' onClick={loginFunction} >Enter</StyledButton>
            {
              this.state.task===false && <p>Incorrect Email or Password</p>
            }
          </>
        }
        {
          this.state.loading && <div>Loading...</div>
  }
          {
           this.state.task === true &&
           <div>
           <Header />
           <Main />
           </div>
          }
          </Container>
      );
    }
  }
  
  
  LoginUser = withUserLogin(LoginUser);