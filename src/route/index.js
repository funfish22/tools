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
        name: 'QR code 自動爬蟲工具',
        path: '/qrCode',
        component: React.lazy(() =>
            import(/*webpackChunkName:"QRCode"*/ /*webpackMode:"lazy"*/ '@page/default/QRCode')
        ),
        exact: true,
    },
    // {
    //     name: '遊戲圖片批次產圖工具',
    //     path: '/batchImg',
    //     component: React.lazy(() =>
    //         import(/*webpackChunkName:"BatchImg"*/ /*webpackMode:"lazy"*/ '@page/default/BatchImg')
    //     ),
    //     exact: true,
    // },
    {
        name: 'Page Not Found',
        path: '*',
        component: React.lazy(() =>
            import(/*webpackChunkName:"404"*/ /*webpackMode:"lazy"*/ '@page/default/PageNotFound')
        ),
    },
];
