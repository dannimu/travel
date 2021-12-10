export default [
    {
        path: '/',
        component: () => import('./views/Home'),
        children: [
            {
                path: '/',
                component: () => import('./views/Shouye')
            },
            {
                path: '/tansuo',
                component: () => import('./views/Tansuo'),
                children: [
                    {
                        path: '',
                        component: () => import('./views/TansuoIndex')
                    },
                    {
                        path: 'quanbu',
                        component: () => import('./views/Quanbu')
                    },
                    {
                        path: 'ziran',
                        component: () => import('./views/Ziran')
                    },
                    {
                        path: 'chengshi',
                        component: () => import('./views/Chengshi')
                    },
                ]
            },
            {
                path: '/biaoqian',
                component: () => import('./views/Biaoqian')
            },
        ]
    },
    {
        path: '*',
        component: () => import('./views/NotFound')
    }
]