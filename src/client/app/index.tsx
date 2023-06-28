import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from '../router/index';
import routeList from '../router/router-config';
import matchRoute from '@/share/match-route';

function clientRender() {
  let initialData = JSON.parse((document.getElementById('ssrTextInitData') as any).value)
  let { targetRoute } = matchRoute(document.location.pathname, routeList)
  targetRoute.initialData = initialData.data.pageData;
  targetRoute.tdk = initialData.data.tdk;
  //渲染 index 组件 到页面
  ReactDom.hydrate(
    <BrowserRouter>
      <App routeList={routeList}/>
    </BrowserRouter>,
  document.getElementById('root'))
}

clientRender();

