import Index from '../pages/index/Index';
import List from '../pages/list/Index';

export default [
    {
        path: '/index',
        component: Index,
        exact: true //是否精确匹配
    },
    {
        path: '/list',
        component: List,
        exact: true,
    }
]
