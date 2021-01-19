import * as React from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import('./views/Home'));
const Gallery = React.lazy(() => import('./views/Gallery'));

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </Suspense>
  )
}

export default Routes;