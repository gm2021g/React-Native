import { createStore, combineReducers } from "redux";

import {
  categoriesReducer,
  coursesReducer,
  searchesReducer,
} from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  courses: coursesReducer,
  searches: searchesReducer,
});

export default createStore(rootReducer);
