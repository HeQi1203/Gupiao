import Gupiao from '../views/Gupao/index';
import Stockes from '../views/Gupao/Stockes/index';
import Add from '../views/Gupao/Add/index';

export default [
    {
        path: '/gupiao',
        component: Gupiao,
        children: [
            {
                path: '/gupiao/stockes',
                component: Stockes,
            },
            {
                path: '/gupiao/add',
                component: Add,
            },
            { path: '/gupiao', redirect: '/gupiao/stockes' },
        ],
    },
    { path: '/', redirect: '/gupiao' },
];
