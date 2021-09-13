import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Cart, Home } from "./pages";
import { setShawarmas } from "./redux/actions/shawarmas";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:3001/shawarmas").then(({ data }) => {
            dispatch(setShawarmas(data));
        });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact />
            </div>
        </div>
    );
}

export default App;
