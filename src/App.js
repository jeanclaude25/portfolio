import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// const Route = ({ component: Component, roles, path }) => {
//   roles = roles || [];
//   return null
// }

const App = () => {
  
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/a-propos/" exact component={About} />
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;