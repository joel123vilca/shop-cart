import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Product } from './components/Product';
import { ProductsList } from './components/ProductsList';
import {NavBar} from './components/NavBar';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsList} exact />
            <Route path="/product/:id" component={Product} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}
export default App;
