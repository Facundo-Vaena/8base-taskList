import React, { Component } from "react";
import compose from "lodash/flowRight";
import { HashRouter as Router, withRouter, Link } from "react-router-dom";
import { EightBaseAppProvider } from '@8base/app-provider';
// import { withTodos, withToggleTodo, withRemoveTodo, withCreateTodo, withToggleAllTodos } from "./graphql";
import { LoginUser } from "./components/loginUser";
import "todomvc-app-css/index.css";
import "./App.css";




// const ENDPOINT_URL = 'https://api.8base.com/cjsrk2gxq000d01s06ye4s4vz';
// const ENDPOINT_URL = 'https://api.8base.com/ckuijejdq004l08me1gvd8m46';
const ENDPOINT_URL = 'https://api.8base.com/ckuj9dpwl009008l272a1cso8';

class App extends Component {

  render() {
    return (
      <Router>
        <EightBaseAppProvider uri={ENDPOINT_URL} >
          {({ loading }) => loading ? <div>"Loading..."</div> : (
            <div className="todoapp">
              <LoginUser />
            </div>
          )}
        </EightBaseAppProvider>
      </Router>
    );
  }
}

export default App;
