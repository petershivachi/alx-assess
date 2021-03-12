
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: '/tasks', component: () => import('pages/Task.vue') },
      { path: '/email', component: () => import('pages/Email.vue') },
      { path: '/contacts', component: () => import('pages/Contacts.vue') },
      { path: '/chat', component: () => import('pages/Chat.vue') },
      { path: '/deals', component: () => import('pages/Deals.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
