import VueRouter from 'vue-router';

let routes =[
    {
        name: 'dashboard',
        path: '/',
        component: require('./views/dashboard.vue')
    },
    {
        name: 'settings',
        path: '/settings',
        component: require('./views/settings.vue')
    },
    {
        path: '/finance',
        component: require('./views/statements/app.vue'),
        children: [
            {
                name: 'collection',
                path: 'collection',
                component: require('./views/statements/collection.vue')
            },
            {
                name: 'transaction',
                path: 'transaction',
                component: require('./views/statements/transaction.vue')
            },
        ],
    },
    {
        name: 'contentEdit',
        path: '/contents/edit',
        component: require('./views/contents/edit.vue')
    },
    {
        name: 'contentShow',
        path: 'contents/show',
        component: require('./views/contents/show.vue'),
    },
    {
        name: 'upload',
        path: '/upload',
        component: require('./views/uploads/edit.vue')
    },
    {
        name: 'activation',
        path: '/activation',
        component: require('./views/activation.vue')
    }


];
export default new VueRouter({
    mode: 'history',
    routes,
});