const redux = require('redux') // step: 5 import redux form 'redux' in react app as per this is node js app
const reduxLogger = require('redux-logger') // For logging redux actions

const createStore = redux.createStore // step: 6 Create redux store
const combineReducers = redux.combineReducers // for combining multiple combineReducers
const applyMiddleware = redux.applyMiddleware // Include middleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE' // step: 1 String constant define type of action 
const BUY_ICECREAM = 'BUY_ICECREAM'

// step: 2 Define action
// {
//   type: BUY_CAKE,
//   info: 'First Redux Action'
// }

// step: 3 Action creator
function buyCake () {
  return {
    type: BUY_CAKE,
    info: 'First Redux Action'
  }
}

function buyIceCream () {
  return {
    type: BUY_ICECREAM,
    info: 'Second Redux Action'
  }
}

// step: 4 Reducer (previousState, action) => newState common state
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

// Seperate State
const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

// ... common reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - 1
//     }
//     default: return state
//   }
// }


// Seperate Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

// step: 7 use createStore
// const store = createStore(reducer)

// step: 8 Access to state
// console.log("Initial State", store.getState())

// step: 9 Subscribe to the store to change in the State
// store.subscribe(() => console.log('Updated State', store.getState()))

//  step: 11 unsubscribe from the store
// const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
// // step: 10 Dispatch method to update state
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// unsubscribe()

// Combine multiple reducer using combineReducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()