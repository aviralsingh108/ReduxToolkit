const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  // Action Creator is a function that create or returns an Object
  return;
  {
    // Action
    type: CAKE_ORDERED;
    quantity: 1;
  } // Action is an object with type property
}

// This is State, since the state should be an Object as per the first of the three main Redux Principle
const initialState = {
  numOfCakes: 10,
};

// This is Reducer, it takes up the previous state and action, then returns a new State post updating it using
// the action
// (previousState, action) => newState;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
