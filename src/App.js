import React, { Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Models from './pages/Models';

export default withRouter(props => {

  const routes = (
    <Switch>
      <Route exact path='/models' component={Models} />
      <Route exact path='/' component={Home} />
      <Redirect exact to="/" />
    </Switch>
  )

  return (
    <div>
      <Header {...props} />
      <main>
        <Suspense fallback="Loading shop">
          {routes}
        </Suspense>
      </main>
    </div>
  );
});
