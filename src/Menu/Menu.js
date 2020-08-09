import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import ArtistDetails from '../ArtistDetails/ArtistDetails';

function Menu() {
  return (
    <div>
      <Switch>
        <Route
          path="/artist/:id"
          component={ArtistDetails} />
        <Route
          path="/"
          component={Home} />
      </Switch>
    </div>
  );
}

export default Menu;
