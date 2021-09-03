const initialState = {
    items: [],
    isLoaded: false,
};

const shawarmas = (state = initialState, action) => {
    if (action.type === "SET_SHAWARMAS") {
        return {
            ...state,
            items: action.payload,
        };
    }
    return state;
};

export default shawarmas;