import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/activity/base-info',
      name: 'activity-base-info',
      component: import(/* webpackChunkName: 'activity-base-info' */ 'views/activities/base-info.vue')
    },
    {
      path: '/activity/offical-website',
      name: 'activity-offical-website',
      component: import(/* webpackChunkName: 'activity-offical-website' */ 'views/activities/offical-website.vue')
    },
    {
      path: '/activity/tickets',
      name: 'activity-tickets',
      component: import(/* webpackChunkName: 'activity-tickets' */ 'views/activities/tickets.vue')
    },
    {
      path: '/activity/members',
      name: 'activity-members',
      component: import(/* webpackChunkName: 'activity-members' */ 'views/activities/members.vue')
    },
    {
      path: '/activity/sites',
      name: 'activity-sites',
      component: import(/* webpackChunkName: 'activity-sites' */ 'views/activities/sites.vue')
    },
    {
      path: '/activity/hotels',
      name: 'activity-hotels',
      component: import(/* webpackChunkName: 'activity-hotels' */ 'views/activities/hotels.vue')
    },
    {
      path: '/activity/trafic',
      name: 'activity-trafic',
      component: import(/* webpackChunkName: 'activity-trafic' */ 'views/activities/trafic.vue')
    },
    {
      path: '/activity/trafic',
      name: 'activity-trafic',
      component: import(/* webpackChunkName: 'activity-trafic' */ 'views/activities/trafic.vue')
    },
    {
      path: '/activity/schedule',
      name: 'activity-schedule',
      component: import(/* webpackChunkName: 'activity-schedule' */ 'views/activities/schedule.vue')
    },
    {
      path: '/activity/sign-in',
      name: 'activity-sign-in',
      component: import(/* webpackChunkName: 'activity-sign-in' */ 'views/activities/sign-in.vue')
    },
    {
      path: '/activity/sort-message',
      name: 'activity-sort-message',
      component: import(/* webpackChunkName: 'activity-sort-message' */ 'views/activities/sort-message.vue')
    }
  ]
})
