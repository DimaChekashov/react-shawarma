import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { Header } from "./components";
import { Cart, Home } from "./pages";

function App() {
    const [shawarmas, setShawarmas] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/db.json")
            .then(({ data }) => setShawarmas(data.shawarmas));
    }, []);

    console.log(shawarmas);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route
                    path="/"
                    render={() => <Home items={shawarmas} />}
                    exact
                />
                <Route path="/cart" component={Cart} exact />
            </div>
        </div>
    );
}

export default App;
