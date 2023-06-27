import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routeList from '../../client/router/router-config';
import App from '../../client/router/index';
import matchRoute from '@/share/match-route';

export default async (ctx: any, next: any) => {
  console.log('ctx.request.path', ctx.request.path);
  const path = ctx.request.path;

  let { targetRoute } = matchRoute(path, routeList);

  const fetchDataFn = targetRoute.component.getInitialProps;
  let fetchResult = {};
  if(fetchDataFn){
      fetchResult = await fetchDataFn();
  }

  let context = {
    initialData: fetchResult
  };

  const html = renderToString(
    <StaticRouter location={path} context={context}>
      <App routeList={routeList} />
    </StaticRouter>
  );

  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>传统 ssr2</title>
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