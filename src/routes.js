import VueRouter from 'vue-router';
import SortTable from './components/sort_table'
import SortCard from './components/sort_card'

let routes=[
  {path: '/', component: SortTable},
  {path: '/table', component: SortTable},
  {path: '/card', component: SortCard}
];

export default new VueRouter({routes});