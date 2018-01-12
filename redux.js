export function createStore(reducer, initialState) {
  let currentState = initialState;
  let listener = () => {};

  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    listener();
    return action;
  }
  function subscribe(newListener) {
    listener = newListener;
    return function unsubscribe() {
      listener = () => {};
    };
  }
  return {
    getState,
    dispatch,
    subscribe
  };
}
