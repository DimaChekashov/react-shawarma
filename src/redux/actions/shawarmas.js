import axios from "axios";

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload,
});

export const fetchShawarmas = (sortBy, category) => (dispatch) => {
    dispatch({
        type: "SET_LOADED",
        payload: false,
    });
    axios
        .get(
            `http://localhost:3001/shawarmas?${
                category !== null ? `category=${category}` : ""
            }&_sort=${sortBy.type}&_order=${sortBy.order}`
        )
        .then(({ data }) => {
            dispatch(setShawarmas(data));
        });
};

export const setShawarmas = (items) => ({
    type: "SET_SHAWARMAS",
    payload: items,
});
