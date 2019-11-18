import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      data: state.data,
    })
  }
  return state
}

const initialState = { data: {} }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore