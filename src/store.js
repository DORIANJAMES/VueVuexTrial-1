import {createStore} from 'vuex';

const store = createStore({
    state: {
        people: [

        ],
        theme: null,
        permissions: [1, 2, 3, 4, 5],
    },
    getters: {
        _getPeople: (state) => (id) => {
            return state.people.filter(person => person.id === id)
        },
        _getTheme: state => state.theme,
        _getPermissions: state => state.permissions,
    },
});
export default store;
