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
        isElement: null,
        elements: [
            {
                id: 'heading',
                label: 'Heading',
                desc: 'Create a blocked text',
                icon: 'FlagIcon',
                settings: {
                    content: 'Enter your heading text',
                    tag: 'p'
                },
                styles: {
                    frontStyle: 'normal',
                    color: 'black',
                    align: 'left',
                    property: 'normal'
                },
                class: '',
                component: 'elementHeading',
                component_setting: 'settingHeading'
            },
            {
                id: 'feature',
                label: 'Featured',
                desc: 'Create a featured',
                icon: 'CubeIcon',
                settings: {
                    position: 'flex',
                    image: 'https://cdn.pixabay.com/photo/2017/09/23/04/02/dice-2777809_960_720.jpg',
                    title: 'The heading 1',
                    content:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum odit odio nobis amet! ',
                    btnText: 'Read more',
                    link: null
                },
                styles: {
                    align: 'center',
                    background: 'white',
                    boxShadow: null,
                    border: 'none',
                    spacing: null,
                    padding: 10
                },
                component: 'elementFeatured',
                component_setting: 'settingFeatured'
            },
            {
                id: 'testimonial',
                label: 'Testimonial',
                icon: ''
            },
            {
                id: 'collections',
                label: 'Collections',
                icon: ''
            },
            {
                id: 'product',
                label: 'Product',
                icon: ''
            }
        ],
        alignments: [
            { id: 'text-left', label: 'Left' },
            { id: 'text-right', label: 'Right' },
            { id: 'text-center', label: 'Center' },
            { id: 'text-justify', label: 'Justify' }
        ],
        positions: [
            { id: '1', label: 'flex' },
            { id: '2', label: 'block' }
        ],
        borderRadius: ['3px', '4px', '5px', '10px', '12px', '15px', '20px', '25px', '30px', '50%']
    },
    getters: {
        xBuilders: (state) => state.builders,
        getSelected: (state) => state.selected,
        isElement: (state) => state.isElement,
        getAllElement: (state) => state.elements,
        getAlignments: (state) => state.alignments,
        positions:(state) => state.positions,
        borderRadius: (state) => state.borderRadius,
        getElHeading: (state) => state.elements[0],
        getSelectEl: (state) => {
            let data = [...state.elements];
            console.log(state.isElement, data);
            let a = data?.find((el) => {
                return el.label == state.isElement;
                console.log('el.label: ', el.label);
            });

            console.log('state.isElement: ', state.isElement);
            console.log('a: ', a);
            return a;
        }
    },

    mutations: {
        checkElement: (state, el) => {
            state.isElement = el?.label;
            console.log('state.isElement: ', el?.label);
        },
        setElemnt: (state, data) => {
            state.selected = data;
        },
        removeSelected: (state) => (state.selected = null)
    },

    actions: {
        removeSelected: ({ commit }) => commit('removeSelected'),
        checkElements: ({ commit }, el) => {
            console.log('el: ', el);
            commit('checkElement', el);
        },
        setEL: ({ commit }, el) => {
            console.log('el: ', el);
            commit('setElemnt', el);
        }
    }
});
