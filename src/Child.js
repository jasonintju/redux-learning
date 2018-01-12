import React from 'react';
import { connect } from '../react-redux';

class Child extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>
            这里<span style={{ color: 'red' }}>有</span>connect连接，所以会自动更新
          </span>
          <span> Child-Count: {this.props.count}</span>
          <button onClick={() => this.props.dispatch({ type: 'INCREMENT' })}>child-plus</button>
        </div>{' '}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Child);
