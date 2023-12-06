import {createStore} from 'vuex';

const store = createStore({
    state: {
        people: [],
        theme: null,
        permissions: [],
    },
});
export default store;
