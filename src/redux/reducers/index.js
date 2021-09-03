import { combineReducers } from "redux";

import filtersReducer from "./filters";
import shawarmasReducer from "./shawarmas";

const rootReducer = combineReducers({
    filters: filtersReducer,
    shawarmas: shawarmasReducer,
});

export default rootReducer;
