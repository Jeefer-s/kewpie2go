import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home.component';
import AboutPage from './pages/about/about.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ReservationPage from './pages/reservation/reservation.component';

const App = () => {
  const appContainerSyles = {
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
  };
  return (
    <div style={appContainerSyles}>
      <Header />
      <div
        style={{
          paddingBottom: '200px',
          width: '80%',
          margin: '28px auto',
        }}
      >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/reservation' component={ReservationPage} />
          <Route path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
