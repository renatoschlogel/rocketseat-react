import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main/main';
import Products from './pages/products/products';


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/products/:id" component={Products}/>

        </Switch>
    </BrowserRouter>
);

export default Routes;