import React, { Component } from 'preact-compat';
import { Route } from 'react-router-dom';
import Post from './components/posts';
import Search from './components/search';
import Account from './components/account';
import Product from './components/products';
import Navigation from './components/navigation';

/**
 * Global App Container Component
 * @class App
 */
class App extends Component {
    render() {
        return (
            <section className="jd-wrapper">
                <Navigation />
                <Route exact path="/" component={Post} />
                <Route path="/products" component={Product} />
                <Route path="/post" component={Account} />
                <Route path="/account" component={Account} />
                <Route path="/search" component={Search} />
            </section>
        );
    }
}

export default App;
