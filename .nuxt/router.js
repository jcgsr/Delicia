import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77b3714a = () => interopDefault(import('../pages/aulas.vue' /* webpackChunkName: "pages/aulas" */))
const _60c2425b = () => interopDefault(import('../pages/contato.vue' /* webpackChunkName: "pages/contato" */))
const _612d4ba7 = () => interopDefault(import('../pages/depoimento.vue' /* webpackChunkName: "pages/depoimento" */))
const _5519c813 = () => interopDefault(import('../pages/horario.vue' /* webpackChunkName: "pages/horario" */))
const _3b7c9f66 = () => interopDefault(import('../pages/info.vue' /* webpackChunkName: "pages/info" */))
const _5a3c91ea = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4cde2039 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _652a1380 = () => interopDefault(import('../pages/preco.vue' /* webpackChunkName: "pages/preco" */))
const _21ecf97a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aulas",
    component: _77b3714a,
    name: "aulas"
  }, {
    path: "/contato",
    component: _60c2425b,
    name: "contato"
  }, {
    path: "/depoimento",
    component: _612d4ba7,
    name: "depoimento"
  }, {
    path: "/horario",
    component: _5519c813,
    name: "horario"
  }, {
    path: "/info",
    component: _3b7c9f66,
    name: "info"
  }, {
    path: "/inspire",
    component: _5a3c91ea,
    name: "inspire"
  }, {
    path: "/portfolio",
    component: _4cde2039,
    name: "portfolio"
  }, {
    path: "/preco",
    component: _652a1380,
    name: "preco"
  }, {
    path: "/",
    component: _21ecf97a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
