import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import Axios from 'axios';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import '../public/assets/global.css';
import './registerServiceWorker';


const store = createStore({
  state() {
    return {
      userType: '',
      userName: '',
      loggedIn: false
    }
  },

  mutations: {
    setUserType(state, payload) {
      state.userType = payload.userType;
    },
    setUserName(state, payload) {
      state.userName = payload.userName;
    },
    setLoggedStatus(state, payload){
      state.loggedIn = payload.loggedIn;
    }
  },

  getters: {
    getUserType(state) {
      return state.userType;
    },
    getUserName(state) {
      return state.userName;
    },
    getLoggedStatus(state){
      return state.loggedIn;
    }
  }

});

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)

router.isReady().then(() => {
  app.mount('#app');
});

app.config.globalProperties.$axios = Axios;

defineCustomElements(window);