import './App.css';
import { Route, Switch } from "react-router-dom"
import Home from './page/Home';
import About from './page/About';
import NotFound from './page/NotFound';
import Products from './page/Products';
import ProductCategory from './page/ProductCategory';

function Routes() {
  return(
    <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/products" component={Products} exact={true}/>
        <Route path="/products/:category/:brand?" component={ProductCategory} exact={true}/>
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
