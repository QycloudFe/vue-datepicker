/**
 * Created by anyuan on 17-7-24.
 */
import Vue from 'vue'
import App from './components/app.vue'
require('./css/bootstrap1.css');
require('./css/bootstrap-datetimepicker.css');
require('./css/iconfont.css');

new Vue ({
    el: '#app',
    components: {App}
});