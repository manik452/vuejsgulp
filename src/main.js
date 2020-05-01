import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";

Vue.use(VueRouter)
import store from './store'
import Authentication from "./components/Authentication";
const router = new VueRouter({
  mode: 'history',
  routes:[
    {path:'/dashboard', component: Dashboard },
    {path:'/signin', component: Signin }

    ]
})
Authentication.methods.signInWithUserNameAndPassword(user => {
  if(user) {
    store.dispatch('/signin')
    router.push('/dashboard')
  } else {
    router.push('/signin')
  }
},'adf')
new Vue({
  el: '#application',
  router,
  store,
  render: h => h(App)
})
