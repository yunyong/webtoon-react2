import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios/index";

import { connect } from 'react-redux';
import { setUser } from "./action";

import Main from './components/page/Main';
import View from './components/view';
import Viewer from "./components/viewer";
import './App.css';

class App extends Component {
    componentDidMount(){
        this._getUser();
    }

    _getUser(){
        const apiUrl = '/api/common/dva_users';
        axios.get(apiUrl)
            .then(res => {
                this.props.onSetUser(res.data[0])
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/webtoon/view/:webtoonId" component={View} />
                    <Route path="/webtoon/viewer/:episodeId" component={Viewer} />
                    <Route path="/topics" component={Main} />
                </div>
            </Router>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSetUser : user => {
            console.log(user)
            return dispatch(setUser(user))
        }
    }
}

App = connect(undefined, mapDispatchToProps)(App);

export default App;
