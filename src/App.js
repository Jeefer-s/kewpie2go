import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/order' component={HomePage} />
        <Route path='/about' component={HomePage} />
        <Route path='/contact' component={HomePage} />
        <Route path='/checkout' component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
