import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HelloContainer from './hello/HelloContainer';

let routes = (
  <Route path="/" component={HelloContainer}>
    <IndexRoute component={HelloContainer}/>
      <Route path="stuff" component={HelloContainer}/>
      <Route path="*" component={HelloContainer}/>
   </Route>
);

export default routes;
