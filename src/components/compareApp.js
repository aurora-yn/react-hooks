import React, { useState } from 'react';

const SimpleApp = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <h1>Item: {item}</h1>
      <button onClick={decrementItem}>Decrement</button>
      <button onClick={incrementItem}>Increment</button>
    </div>
  );
}

class UglyApp extends React.Component {
  state = { item: 1 };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Item: {item}</h1>
        <button onClick={this.decrementItem2}>Decrement</button>
        <button onClick={this.incrementItem2}>Increment</button>
      </div>
    );
  }
  decrementItem2 = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };
  incrementItem2 = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };
}