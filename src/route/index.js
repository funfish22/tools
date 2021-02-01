import React from 'react';

export const routes = [
    {
        name: '首頁',
        path: '/',
        component: React.lazy(() => import(/*webpackChunkName:"Home"*/ /*webpackMode:"lazy"*/ '@page/default/Home')),
        exact: true,
    },
    {
        name: 'APP ICON 圖片尺寸調整工具',
        path: '/resizeIcon',
        component: React.lazy(() =>
            import(/*webpackChunkName:"ResizeIcon"*/ /*webpackMode:"lazy"*/ '@page/default/ResizeIcon')
        ),
        exact: true,
    },
    {
        name: 'Page Not Found',
        path: '*',
        component: React.lazy(() =>
            import(/*webpackChunkName:"404"*/ /*webpackMode:"lazy"*/ '@page/default/PageNotFound')
        ),
    },
];
