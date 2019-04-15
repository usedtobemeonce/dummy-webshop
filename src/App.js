import React, { Suspense, useContext, useReducer } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Models from './pages/Models';
import ProductDetails from './components/Products/ProductDetails';
import useMedia from './hooks/useMedia';
import Context from './state/context';
import reducer from './state/reducer';
import InfoBar from './components/InfoBar';

export default withRouter(props => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  const isSmallScreen = useMedia('(max-width: 1200px)');

  const routes = (
    <Switch>
      {isSmallScreen && <Route exact path='/models/product' component={ProductDetails} {...props} />}
      <Route path='/models' component={Models} {...props} />
      <Route exact path='/' component={Home} {...props} />
      <Redirect exact to="/" />
    </Switch>
  )

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
