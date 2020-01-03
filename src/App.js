import React from 'react';
import { GlobalStyle } from './style'
import Header from "./common/header/index";
import Footer from "./common/footer";
import {GlobalIcon} from "./statics/iconfont/iconfont";
import store from "./store";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import MainPage from "./pages/mainpage";
import Community from "./pages/community";
import Toolbar from "./common/RHeader";


function App() {
  return (
      <Provider store={store}>
          <GlobalStyle/>
          <GlobalIcon/>

          <BrowserRouter>
              <Header/>
              <Route path='/' exact component={MainPage}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/mainpage' exact component={MainPage}></Route>
              <Route path='/home' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/community' exact component={Community}></Route>
              <Route path='/toolbar' exact component={Toolbar}></Route>
              <Footer/>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
