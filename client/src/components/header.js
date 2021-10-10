import React, { Component } from "react";
import { withCreateTodo } from '../graphql'
import { TitleDiv, StyledInput } from "../style/headerStyle";
export default class Header extends Component {
  state = { text: "" };
  render() {
    const { createTodo } = this.props;
    return (
      <header>
        <TitleDiv>
          <h1>Todo List</h1>
        </TitleDiv>
        <StyledInput
          className="new-todo"
          onChange={({ target }) =>
            this.setState(({ text }) => ({ text: target.value }))
          }
          onKeyPress={({ key }) => {
            if (key === "Enter") {
              createTodo({ text: this.state.text });
              this.setState({ text: "" });
            }
          }}
          value={this.state.text}
        />
      </header>
    );
  }
}

Header = withCreateTodo(Header);
