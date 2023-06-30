import React from 'react';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routeList from '../../client/router/router-config';
import App from '../../client/router/index';
import matchRoute from '@/share/match-route';

export default async (ctx: any, next: any) => {
  const path = ctx.request.path;

  let { targetRoute } = matchRoute(path, routeList);

  const fetchDataFn = targetRoute.component.getInitialProps;
  let fetchResult = {
    error: null,
    data: {
      pageData: null,
      tdk: null,
    }
  };
  let tdk = {
    title: '美团',
    keywords: '默认关键词',
    description: '默认描述'
  };
  if(fetchDataFn){
    fetchResult = await fetchDataFn();
    targetRoute.initialData = fetchResult.data.pageData;
    if (fetchResult.data.tdk) {
      tdk = fetchResult.data.tdk;
      targetRoute.tdk = tdk;
    }
  }
  const html = renderToString(
    <StaticRouter location={path}>
      <App routeList={routeList} />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
</head>
<body>
    <div id="root">
        ${html}
    </div>
    <textarea id="ssrTextInitData" style="display:none;">
      ${JSON.stringify(fetchResult)}
    </textarea>
</body>
</html>
<script type="text/javascript"  src="index.js"></script>
`;
  await next();
};