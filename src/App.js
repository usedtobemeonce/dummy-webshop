import React, { Suspense, useContext, useReducer } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

import Header from './components/Header';
import Home from './pages/Home';
import Models from './pages/Models';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import ProductDetails from './components/Products/ProductDetails';
import useMedia from './hooks/useMedia';
import Context from './store/context';
import reducer from './store/reducer';
import InfoBar from './components/InfoBar';
import './FontAwesomeIcons';

export default withRouter(props => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  const isSmallScreen = useMedia('(max-width: 1200px)');

  const routes = (
    <Switch>
      {isSmallScreen && <Route exact path='/models/product' component={ProductDetails} {...props} />}
      <Route path='/models' component={Models} {...props} />
      <Route path='/shopping-cart' exact component={ShoppingCart} {...props} />
      <Route
        path='/shopping-cart/checkout'
        exact
        render={() => (
          state.shoppingCart.length === 0
            ? (<Redirect to='/shopping-cart' />)
            : (<Checkout {...props} />)
        )}
      />
      <Route exact path='/' component={Home} {...props} />
      <Redirect exact to="/" />
    </Switch>
  );

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Header {...props} />
      <main style={{ height: 'calc(100vh - 67px)' }}>
        <Suspense fallback="Loading shop">
          {isSmallScreen && <InfoBar {...props}>bar</InfoBar>}
          {routes}
        </Suspense>
      </main>
    </Context.Provider>
  );
});
