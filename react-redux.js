import React, { Children } from 'react';
import PropTypes from 'prop-types';

export class Provider extends React.Component {
  getChildContext() {
    return { store: this.store };
  }
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }
  render() {
    return Children.only(this.props.children);
  }
}

Provider.childContextTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  })
};

export function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    class Connect extends React.Component {
      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(this.handleStoreChange.bind(this));
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      handleStoreChange() {
        this.forceUpdate();
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.store.getState())}
            {...mapDispatchToProps(this.context.store.dispatch)}
          />
        );
      }
    }
    Connect.contextTypes = {
      store: PropTypes.object
    };
    return Connect;
  };
}
