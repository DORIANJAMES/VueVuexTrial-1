import Home from '@/views/Dashboard.vue';
import Users from "@/views/Users.vue";
import Form  from "@/components/Form.vue";
import Table from "@/components/Table.vue";
export const routes = [
    {name: 'HomePage', path: '/', component: Home},
    {name: 'UsersView', path: '/users', component: Users, children: [
            {name: 'UserTable', path: '', component: Table},
            {name: 'UserEdit', path:'/users/:id', component: Form, props: true},
            {name: 'NewUserForm', path: '/users/new-user', component: Form}
    ]},
];
