import {createStore} from "redux"

import rootReducers from "./Redux/Reducers/IndexReducer"

const store=createStore(rootReducers)

export default store