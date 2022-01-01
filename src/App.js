import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import NavMenu from './components/NavMenu';
import Product from './components/Product';
import CartProduct from './components/CartProduct';

function App() {
  return (
    <>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/view/:proId" component={Product} />
        <Route exact path="/cart" component={CartProduct} />
        <Route exact path="*">
          404 Page Not Found!
        </Route>
      </Switch>
    </>
  );
}

export default App;
