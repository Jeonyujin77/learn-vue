// vue환경에서는 import, node환경에서는 require
import { createApp } from "vue";
// Now after doing some research 🔍😁, I got to know that in Vue v3, Vue is not getting exported by default,
// instead now there are named exports. That is the reason of the warning,
// so changing the code to below format either using import as or using destructuring, I am able to use Vue
// import { createApp } from "vue";
import NumberBaseBall from "./NumberBaseBall";

createApp(NumberBaseBall).mount("#root");
