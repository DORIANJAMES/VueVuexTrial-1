import Home from './views/Dashboard.vue';
import Users from "@/views/Users.vue";
import Form  from "@/components/Form.vue";
export const routes = [
    {name: 'HomePage', path: '/', component: Home},
    {name: 'UsersView', path: '/users', component: Users},
    {name: 'NewUser', path: '/new-user', component: Form},

];
