import DefaultLayout from '~/layouts/Default.vue';
import Vuex from 'vuex';
import { store } from "./stores";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { setupFontAwesome } from "./fontAwesome";
import { client } from "./apolloClient";

require("typeface-poppins");

setupFontAwesome();

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('fa', FontAwesomeIcon);

  Vue.use(Vuex);

  Vue.prototype.$apollo = client;
  appOptions.store = new Vuex.Store(store);
}
