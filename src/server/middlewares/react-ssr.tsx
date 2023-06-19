import React from 'react';

import { renderToString } from 'react-dom/server';

import Index from '../../client/pages/index/Index';

export default (ctx: any, next: any) => {
  const html = renderToString(<Index />);

  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>传统 ssr2</title>
</head>
<body>
    <div id="root">
        ${html} <span>测试内容</span>//增加了span 标签
    </div>
</body>
</html>
<script type="text/javascript"  src="index.js"></script>
`;

return next();
};