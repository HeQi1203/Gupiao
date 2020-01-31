import { createStore, combineReducers } from 'redux';
import StockesGupiao from './StockesGupiao/index';
import GupiaoList from './GupiaoList/index';
let reducers = combineReducers({ GupiaoList, StockesGupiao });
let sotre = createStore(reducers);
export default sotre;
