import React, { useState } from "react";

export class CLesson extends React.Component {
  // public class fields:
  state = { count: 0 };

  updateState = count => {
    this.setState({ count });
  };

  render() {
    return (
      <div>
        <h3>Lesson class</h3>
        <p>{this.state.count}</p>
        <button onClick={() => this.updateState(this.state.count + 1)}>
          Update
        </button>
      </div>
    );
  }
}

export function FLesson() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Lesson function</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default {};
