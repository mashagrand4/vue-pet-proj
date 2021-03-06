import Vue from 'vue';
import Router from 'vue-router';

import Library from '../components/AppLibrary';
import AboutUs from '../components/AppAboutUs';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Library,
        },
        {
            path: '/about-us',
            name: 'aboutUs',
            component: AboutUs,
        }
    ]

});

export default router;
