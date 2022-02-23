import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/routerIndex";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedinIn);
library.add(faTwitter);
library.add(faXmark);
library.add(faBars);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
