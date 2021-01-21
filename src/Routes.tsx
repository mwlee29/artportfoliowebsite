import * as React from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import('./views/Home'));
const Gallery = React.lazy(() => import('./views/Gallery'));
const Blog = React.lazy(() => import('./views/Blog'));
const About = React.lazy(() => import('./views/About'));
const Contact = React.lazy(() => import('./views/Contact'));

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Suspense>
  )
}

export default Routes;