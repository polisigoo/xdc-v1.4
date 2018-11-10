require('../bootstrap');

import Vue from 'vue';
import app from './views/app.vue';
import router from './routes';
import VeeValidate from 'vee-validate';
import swal from 'sweetalert';




new Vue({
    el: '#cpdash',
    router,
    swal,
    render: h => h(app)
});