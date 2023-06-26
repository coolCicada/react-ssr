import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route} from 'react-router';
import routeList from '../../client/router/router-config';
import App from '../../client/router/index';

export default (ctx: any, next: any) => {
  console.log('ctx.request.path', ctx.request.path);
  const path = ctx.request.path;
  let contenxt = {};
  const html = renderToString(
    <StaticRouter location={path} context={contenxt}>
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
</body>
</html>
<script type="text/javascript"  src="index.js"></script>
`;

return next();
};