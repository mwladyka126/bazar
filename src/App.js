import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';
// Test

import MainLayout from './components/layout/MainLayout/MainLayoutContainer';
import Homepage from './components/views/Homepage/Homepage';
import ProductPage from './components/views/ProductPage/ProductPageContainer';
import Cart from './components/features/Cart/CartContainer';
import ProductList from './components/views/ProductList/ProductListContainer';
import BlogLayout from './components/layout/BlogLayout/BlogLayoutContainer';
import Login from './components/views/Login/Login';
import Register from './components/views/Register/Register';
import FooterInformation from './components/features/FooterInformation/FooterInformation';
import FooterAccount from './components/features/FooterAccount/FooterAccount';
import FooterOrders from './components/features/FooterOrders/FooterOrders';
import Search from './components/views/Search/SearchContainer';
import BlogArticle from './components/layout/BlogLayout/BlogArticleContainer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/shop/:categoryId'} component={ProductList} />
          <Route exact path={'/product/:productId'} component={ProductPage} />
          <Route exact path={'/cart'} component={Cart} />
          <Route exact path='/blog' component={BlogLayout} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/search/:textSearch'} component={Search} />
          <Route exact path={'/info/:id'} component={FooterInformation} />
          <Route exact path={'/account/:id'} component={FooterAccount} />
          <Route exact path={'/orders/:id'} component={FooterOrders} />
          <Route exact path={'/blog/:id'} component={BlogArticle} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
