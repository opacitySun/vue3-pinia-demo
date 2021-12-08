import TestOne from '@src/views/TestOne.vue';
import TestTwo from '@src/views/TestTwo.vue';

export default [
  { 
    path: '/', 
    component: import('@src/views/Home.vue') 
  },
  { 
    path: '/testOne', 
    component: TestOne
  },
  { 
    path: '/testTwo', 
    component: TestTwo
  },
];
