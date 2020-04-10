import React from "react";

interface AppProps {}
interface AppState {
  timer: number;
}
class Timer extends React.Component<AppProps, AppState> {
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
    return <div>Timer:{this.state.timer}</div>;
  }
}

export default Timer;
