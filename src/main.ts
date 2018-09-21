import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import { Navbar } from './components/modules/Navbar';
import { Sidebar } from './components/modules/Sidebar';
import { Footbar } from './components/modules/Footbar';
 // import styles
import './styles/main.scss';


sync(store, router);


new Vue({
  el: '#page-container',
  store,
  router: router,
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar,
    'mainfooter': Footbar
  }
});
