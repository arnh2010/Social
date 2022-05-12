import { applyMiddleware, combineReducers, createStore } from 'redux'
import AuthReducer from './AuthReducer';
import MessageReducer from './MessageReducer';
import ProfileReducer from './ProfileReducer';
import UsersReducer from './UsersReducer';
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
       ProfilePage:ProfileReducer, 
       MessagePage:MessageReducer,
       UsersPage: UsersReducer,
       AuthPage: AuthReducer
})

let Store=createStore(reducers,applyMiddleware(thunkMiddleware));

Window.Store=Store

export default Store