import CounterReducer from './reducers/CountReducer';

import {createStore} from "redux";

const store = createStore(CounterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store ;


