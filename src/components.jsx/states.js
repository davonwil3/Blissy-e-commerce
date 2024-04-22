import { createStore, combineReducers } from 'redux';

const add = (content) => {

  return {
    type: 'Add-cart',
    payload: {
      name: content.name,
      source: content.source,
      price: content.price,
      quantity: content.quantity,
      size: content.size,
      operator: content.operator,
      index: content.index,
      total: content.total,
      subtotal: content.subtotal
    }
  }
}

const collection = (content) => {

  return {
    type: 'Collection',
    payload: {
      choice: content.choice
    }
  }
}

const remove = (content) => {

  return {
    type: 'Remove-cart',
    payload: {
      name: content.name,
      source: content.source,
      price: content.price,
      quantity: content.quantity,
      size: content.size
    }
  }
}
const calc = (content) => {

  return {
    type: 'calculation',
    payload: {
      calculation: content.calculation,
      number: content.number
    }
  }
}

const bagContent = (content) => {

  return {
    type: 'bag',
    payload: {
      bagQuantity: content.bagQuantity
    }
  }
}

function cart(state = [], action) {
  switch (action.type) {

    case 'Add-cart':
      var subtotal = 0;
      var result = state;
      const found = state.find(item => item.name === action.payload.name && item.size === action.payload.size)

      if (found) {

        if (action.payload.operator === "add") {

          console.log("its added");
          found.quantity = found.quantity + 1
          found.total = found.price * found.quantity
        }
        else if (action.payload.operator === "subtract") {
          console.log("it subtracted");
          found.quantity = found.quantity - 1
          console.log();
          if (found.quantity === 0) {
            state.splice(state.indexOf(found), 1);
          }
        }

      }
      else {
        console.log("added to cart");
        state = [...state, action.payload]
      }
      return state
    case 'Remove-cart':

      const foundD = state.find(item => item.name === action.payload.name && item.size === action.payload.size)
      state.splice(state.indexOf(foundD), 1);
      return state
    default:
      return state
  };
}

function bagState(state = Number, action) {
  switch (action.type) {

    case 'bag':

      var result = state
      state = action.payload
      result = state
      return result
    default:
      return state
  }
}


function collectionChoice(state = String, action) {
  switch (action.type) {
    case 'Collection':
      var result = state
      state = action.payload.choice
      result = state
      return result
    default:
      return state
  }
}

function calculate(state = Number, action) {
  switch (action.type) {
    case 'calculation':
      var result = state;
      if (action.payload.calculation === "subtotal") {
        state = action.payload
        result = state
      }
      else {
        result = result
      }
      return result
    default:

      return state
  };
}

const reducers = combineReducers({
  cart: cart,
  calculate: calculate,
  bag: bagState,
  choice: collectionChoice
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
export { add };
export { remove };
export { calc };
export { bagContent };
export { collection }
