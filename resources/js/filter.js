import Vue from 'vue'
import moment from 'moment'

Vue.filter('timeFormate', (arg) => {
    // return moment(arg).format('MMMM Do YYYY, h:mm:ss a');
    return moment(arg).startOf('hour').fromNow();
});

Vue.filter('shortLength', (text, length, suffix) => {
    return text.substring(0, length)+suffix;
})
