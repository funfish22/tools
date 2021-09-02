import React from 'react';

export const routes = [
    {
        name: '首頁',
        path: '/',
        component: React.lazy(() => import(/*webpackChunkName:"Home"*/ /*webpackMode:"lazy"*/ '@page/default/Home')),
        exact: true,
        tags: '',
    },
    {
        name: 'APP ICON 圖片尺寸調整工具',
        path: '/resizeIcon',
        component: React.lazy(() =>
            import(/*webpackChunkName:"ResizeIcon"*/ /*webpackMode:"lazy"*/ '@page/default/ResizeIcon')
        ),
        exact: true,
        bgColor: '#02E5C9',
        color: '#000',
        tags: 'tool',
    },
    {
        name: 'QR code 自動爬蟲工具',
        path: '/qrCode',
        component: React.lazy(() =>
            import(/*webpackChunkName:"QRCode"*/ /*webpackMode:"lazy"*/ '@page/default/QRCode')
        ),
        exact: true,
        bgColor: '#05baff',
        color: '#000',
        tags: 'tool',
    },
    {
        name: '遊戲圖片批次產圖工具',
        path: '/batchImg',
        component: React.lazy(() =>
            import(/*webpackChunkName:"BatchImg"*/ /*webpackMode:"lazy"*/ '@page/default/BatchImg')
        ),
        exact: true,
        bgColor: '#b7eb8f',
        color: '#000',
        tags: 'tool',
    },
    {
        name: '前端公告',
        path: '/announcementF2E',
        component: React.lazy(() =>
            import(/*webpackChunkName:"AnnouncementF2E"*/ /*webpackMode:"lazy"*/ '@page/default/AnnouncementF2E')
        ),
        exact: true,
        bgColor: '#b7eb8f',
        color: '#000',
        tags: 'announcement',
        login: false,
    },
    {
        name: '翻譯搜尋',
        path: '/translationSearch',
        component: React.lazy(() =>
            import(/*webpackChunkName:"TranslationSearch"*/ /*webpackMode:"lazy"*/ '@page/default/TranslationSearch')
        ),
        exact: true,
        bgColor: '#05baff',
        color: '#000',
        tags: 'announcement',
        login: false,
    },
    {
        name: 'Page Not Found',
        path: '*',
        component: React.lazy(() =>
            import(/*webpackChunkName:"404"*/ /*webpackMode:"lazy"*/ '@page/default/PageNotFound')
        ),
        tags: '',
    },
];
