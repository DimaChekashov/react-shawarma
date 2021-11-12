import { combineReducers } from "redux";

import filters from "./filters";
import shawarmas from "./shawarmas";
import cart from "./cart";

const rootReducer = combineReducers({
    filters,
    shawarmas,
    cart,
});

export default rootReducer;
