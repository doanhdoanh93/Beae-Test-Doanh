import { createStore } from 'vuex';

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
        isElement: null
    },
    getters: {
        builders: (state) => state.builders,
        getSelected: (state) => state.selected,
        isElement: (state) => state.isElement
    },

    mutations: {
        checkElement: (state, el) => {
            state.isElement = el?.label;
            state.selected = el;
            // console.log('state.selected: ', state.selected);
        },
        add: (state, item) => {
            state.builders.push(item);
            console.log('state.builders: ', state.builders);
        },
        deleteEL: (state, item) => (state.builders = state.builders.filter((el) => el !== item)),
        openSetting: (state, item) => {
            state.selected = item;
        }
    },

    actions: {
        add: ({ commit }, item) => commit('add', item),
        openSetting: ({ commit }, item) => commit('openSetting', item),
        deleteEL: ({ commit }, item) => commit('deleteEL', item),
        checkElements: ({ commit }, el) => {
            commit('checkElement', el);
        }
    }
});
