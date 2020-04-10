import React from "react";
import ReactDOM from "react-dom";
//import Timer from "./timer";
import Counter from "./counter";

interface AppProps {}
interface AppState {
  timer: number;
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      timer: 0,
    };
    //1秒ごとにStateを更新する
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
