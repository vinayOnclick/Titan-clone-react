import { configureStore, combineReducers} from "@reduxjs/toolkit";
import cartReducer, { getTotal } from './features/cartSlice'
import userReducer from './features/userSlice'


const reducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    
})
const store = configureStore({
    reducer
})

store.dispatch(getTotal())

export default store;