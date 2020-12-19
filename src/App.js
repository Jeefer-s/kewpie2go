import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/about' component={HomePage} />
        <Route path='/contact' component={HomePage} />
        <Route path='/checkout' component={CheckoutPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
