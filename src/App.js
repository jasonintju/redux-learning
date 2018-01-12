import React from 'react';
import PropTypes from 'prop-types';
import Child from './Child';
import './App.scss';

class App extends React.Component {
  render() {
    const AppContext = this.context.store;
    return (
      <div>
        <h3>Hello, Parcel</h3>
        <div>
          <span>
            这里<span style={{ color: 'red' }}>没有</span>connect连接，只是获取store中的数据，所以不会自动更新
          </span>
          <span> App-Count: {AppContext.getState().count}</span>
          <button onClick={() => AppContext.dispatch({ type: 'INCREMENT' })}>plus</button>
        </div>
        <Child />
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object
};

export default App;
