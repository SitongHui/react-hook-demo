import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/**
 * 自定义Hook
 * */
function usePageName(name) {
    useEffect(() => {
        console.log(name, 'name');
    });

    return (
        <span>您当前的位置是 -> {name}</span>
    )
}

function Index() {
    const pageName = usePageName('首页');

    return (
        <>
            <h2>Home Page</h2>
            <p>{pageName}</p>
        </>
    )
}

function List() {
    const pageName = usePageName('列表');

    return (
        <>
            <h2>List page</h2>
            <p>{pageName}</p>
        </>
    )
}

function CustomHook() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list">列表</Link></li>
            </ul>

            <Route path="/" exact component={Index}/>
            <Route path="/list" exact component={List}/>
        </Router>
    )
}

export default CustomHook;
