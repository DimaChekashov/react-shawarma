import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { Header } from "./components";
import { Cart, Home } from "./pages";
import { setShawarmas as setShawarmasAction } from "./redux/actions/shawarmas";

class App extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3000/db.json").then(({ data }) => {
            this.props.setShawarmas(data.shawarmas);
        });
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route
                        path="/"
                        render={() => <Home items={this.props.items} />}
                        exact
                    />
                    <Route path="/cart" component={Cart} exact />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.shawarmas.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setShawarmas: (items) => dispatch(setShawarmasAction(items)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
