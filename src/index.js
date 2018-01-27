import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {FlowersForm} from './components/FlowersForm'
import {ShowFlower} from './components/ShowFlower'
import {BaseLayout} from './components/BaseLayout'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/flowers-form" component={FlowersForm}/>
        <Route path='/flowers/:flower' component={ShowFlower}/>
        <Route path="/" component={App}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));

registerServiceWorker();
