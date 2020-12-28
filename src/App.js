import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppContainer, GlobalStyle } from './global.styles';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.component';
import AboutPage from './pages/about/about.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ReservationPage from './pages/reservation/reservation.component';
import RegisterPage from './pages/register/register.component';
import SettingsPage from './pages/settings/settings.component';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '200px',
          width: '100%',
          margin: '28px auto',
        }}
      >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/reservation' component={ReservationPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/register' component={RegisterPage} />
          {currentUser ? (
            <Route path='/settings' component={SettingsPage} />
          ) : (
            <Redirect to='/' />
          )}
        </Switch>
      </div>
      <Footer />
    </AppContainer>
  );
};

export default App;
