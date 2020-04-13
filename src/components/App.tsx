import React from 'react';
import { ICounterState } from '../reducers';
import { ICounter, IUpdateCounter } from '../actions';
import { updateCounter } from '../actions';
import { compose } from 'redux';
import { connect } from 'react-redux';

interface AppProps {
  title?: string;
  counter: ICounter;
  updateCounter(toIncrease: boolean): IUpdateCounter;
}

class App extends React.Component<AppProps> {
  onIncrement = (): void => {
    this.props.updateCounter(true);
  };

  onDecrement = (): void => {
    this.props.updateCounter(false);
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>加算</button>
        <button onClick={this.onDecrement}>減算</button>
        <div>{this.props.counter.value}</div>
      </div>
    );
  }
}

/*--- ReduxのState、Actionと接続（Connect) ---*/
const mapStateToProps = ({ counter }: ICounterState): { counter: ICounter } => {
  return { counter };
};

export default compose(connect(mapStateToProps, { updateCounter }))(App);
