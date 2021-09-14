import axios from "axios";

export const fetchShawarmas = () => (dispatch) => {
    axios.get("http://localhost:3001/shawarmas").then(({ data }) => {
        dispatch(setShawarmas(data));
    });
};

export const setShawarmas = (items) => ({
    type: "SET_SHAWARMAS",
    payload: items,
});
