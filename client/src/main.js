import { createApp } from 'vue'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import Axios from 'axios';
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard';
import Tus from '@uppy/tus';

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
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';



const store = createStore({
  plugins: [createPersistedState()],
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
    },
    logout(state, payload){
      state.loggedIn = false;
      state.userType = '',
      state.userName = ''
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