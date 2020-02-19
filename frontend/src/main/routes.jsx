import React from 'react';
import { HashRouter, Redirect, Route,  } from 'react-router-dom'

import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
    <HashRouter >
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </HashRouter>
)