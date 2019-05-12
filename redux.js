function createStore(reducer, preloadedState, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState);
  }

  let state = preloadedState;
  let listener = null;

  function dispatch(action) {
    state = reducer(state, action);
    if (listener) listener();
  }

  return {
    dispatch: dispatch,
    getState: () => state,
    subscribe: listenerFn => (listener = listenerFn)
  };
}

// export for tests
// module.exports = { createStore };

// export for app
export default createStore;
