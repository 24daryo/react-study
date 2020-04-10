import React from "react";

interface Props {}
interface State {
  count: number;
}
class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState((state) => {
      //更新には `this.state` ではなく `state` を使用
      return { count: state.count + 1 };
    });
  };

  Decrement = () => {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Counter</h1>
        </div>
        <div className="counter">
          <button type="button" name="increment" onClick={this.Increment}>
            +
          </button>
          <button type="button" name="decrement" onClick={this.Decrement}>
            -
          </button>
        </div>
        <div className="total">Count:{this.state.count}</div>
      </div>
    );
  }
}

export default Counter;
