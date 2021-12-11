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
                component: () => import('./views/Biaoqian'),
                children: [
                    {
                        path: '',
                        component: () => import('./views/BiaoqianIndex')
                    },
                    {
                        path: 'ticai',
                        component: () => import('./views/Ticai')
                    },
                    {
                        path: 'fengge',
                        component: () => import('./views/Fengge')
                    },
                    {
                        path: 'shebei',
                        component: () => import('./views/Shebei')
                    },
                ]
            },
        ]
    },
    {
        path: '*',
        component: () => import('./views/NotFound')
    }
]