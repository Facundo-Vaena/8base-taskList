import React, { Component } from 'react';
import compose from "lodash/flowRight";
import { withRouter } from "react-router-dom";
import { withTodos, withToggleTodo, withToggleAllTodos, withRemoveTodo } from '../graphql'



export default class Main extends Component {


    render() {
      const {
        todos,
        toggleResolver,
        toggleTodo,
        toggleAllTodos,
        removeTodo,
        location
      } = this.props;
      return todos && todos.length ? (
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={() =>
              todos.some(todo => todo.completed === false)
                ? toggleAllTodos({ completed: true })
                : toggleAllTodos({ completed: false })
            }
            checked={false}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {todos
              .filter(todo => {
                if (location.pathname === "/completed") {
                  return todo.completed;
                }
                if (location.pathname === "/active") {
                  return !todo.completed;
                }
                return true;
              })
              .map(todo => (
                <li
                  key={todo.id}
                  className={todo.completed ? "completed" : undefined}
                >
                  <div className="view">
                    <input
                      className="toggle"
                      onChange={() =>
                        toggleResolver({ id: todo.id, text: todo.text, completed: !todo.completed })
                        // toggleTodo({ id: todo.id, completed: !todo.completed })
                      }
                      checked={todo.completed}
                      type="checkbox"
                    />
                    <label>{todo.text}</label>
                    <button
                      onClick={() => removeTodo(todo.id)}
                      className="destroy"
                    />
                  </div>
                  <input className="edit" onChange={() => { }} value={todo.text} />
                </li>
              ))}
          </ul>
        </section>
      ) : null;
    }
  }
  
  
  Main = compose(
    withRouter,
    withTodos,
    withToggleTodo,
    withToggleAllTodos,
    withRemoveTodo
  )(Main);



  // class Footer extends Component {
//   render() {
//     const { location, todos } = this.props;
//     return todos.length ? (
//       <footer className="footer">
//         <span className="todo-count">
//           <strong>0</strong> item left
//         </span>
//         <ul className="filters">
//           <li>
//             <Link
//               className={location.pathname === "/" ? "selected" : undefined}
//               to="/"
//             >
//               All
//             </Link>
//           </li>
//           <li>
//             <Link
//               className={
//                 location.pathname === "/active" ? "selected" : undefined
//               }
//               to="/active"
//             >
//               Active
//             </Link>
//           </li>
//           <li>
//             <Link
//               className={
//                 location.pathname === "/completed" ? "completed" : undefined
//               }
//               to="/completed"
//             >
//               Completed
//             </Link>
//           </li>
//         </ul>
//         <button className="clear-completed">Clear completed</button>
//       </footer>
//     ) : null;
//   }
// }

// Footer = compose(
//   withRouter,
//   withTodos  
// )(Footer);