import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App/App';
import ArtistDetails from '../ArtistDetails/ArtistDetails';

function Router() {
  return (
    <div>
      <Switch>
        <Route
          path="/artist/:id"
          component={ArtistDetails} />
        <Route
          path="/"
          component={App} />
      </Switch>
    </div>
  );
}

export default Router;
