import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

const modules = import.meta.globEager('./modules/*.ts');
const stores: any = {};

for (let path in modules) {
    if (path && path.split('/').pop()) {
        let name = ((path.split('/') as string[]).pop() as string)
            .replace(/\.ts/, '')
            .toLowerCase();
        stores[name] = modules[path].default;
    }
}

export default createStore({
    modules: stores,
    state: {
        builders: [],
        selected: null,
        isElement: null,
        collapse:null
    },
    getters: {
        builders: (state) => state.builders,
        getSelected: (state) => state.selected,
        isElement: (state) => state.isElement,
        collapse: (state) => state.collapse
    },

    mutations: {
        checkElement: (state, el) => {
            state.isElement = el?.label;
            state.selected = el;
            // console.log('state.selected: ', state.selected);
        },
        add: (state, item) => {
            item['id']=uuidv4()
            // console.log('newItem: ', item);
            state.builders.push(item);
            // console.log('state.builders: ', state.builders);
        },
        deleteEL: (state, item) =>{
            state.builders=state.builders.filter((el) => el !== item)
        } ,
        openSetting: (state, item) => {
            state.selected = item;
        },
        setCollapse:(state, item) => {
            if (state.collapse && state.collapse === item.id) {
                state.collapse = null;
                return;
            }
            state.collapse = item.id;
            console.log('state.collapse: ', state.collapse);
        }
    },

    actions: {
        add: ({ commit }, item) => commit('add', item),
        openSetting: ({ commit }, item) => commit('openSetting', item),
        deleteEL: ({ commit }, item) => commit('deleteEL', item),
        checkElements: ({ commit }, el) => {
            commit('checkElement', el);
        },
        setCollapse: ({ commit }, item) => commit('setCollapse', item),
    }
});
