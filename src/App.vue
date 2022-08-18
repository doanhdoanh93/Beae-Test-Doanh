<template>
    <div class="flex flex-col w-full min-h-screen shado gap-3 bg-gray-100">
        <div id="header" class="bg-white w-full h-14 shadow flex justify-between mb-5 ...">
            <div class="float-left">
                <a href="/" class="flex"
                    ><img class="h-6 mt-4 ml-4" src="/assets/images/beae.svg" alt="Beae" />
                </a>
            </div>
            <button
                class="bg-green-700 pr-2 pl-2 mr-3 mt-3 mb-3 rounded text-white border border-green-600 ..."
            >
                Import/Export JSON
            </button>
        </div>

        <div class="flex-grow flex gap-3">
            <div id="left" ref="left" class="flex-shrink-0 w-1/6 pl-3">
                <div class="grid grid-cols-3 gap-3 mt-1 pl-5 pr-5">
                    <div v-for="(el, i) in getAllElement" :key="i">
                        <div
                            class="elcss p-3"
                            draggable="true"
                            @dragstart="checkTitle(el)"
                            :id="el.id"
                        >
                            <div>
                                {{ el.label }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="main" class="flex-grow p-2 bg-white" @dragover="allowDrop">
                <div class="h-full w-full flex items-center" v-show="!isElement">
                    <div
                        class="border border-dashed border-6 text-center w-full h-60 flex items-center justify-center"
                    >
                        {{ 'DRAG ELEMENT HERE' }}
                    </div>
                </div>
                <!-- <component></component> -->
                <elementHeading v-show="isElement == 'Heading'" />
                <elementFeatured v-show="isElement == 'Featured'" />
            </div>

            <div id="right" class="flex-shrink-0 w-1/6 p-2 bg-white text-left" ref="right">
                <div v-show="!isElement" class="pt-20 text-center">
                    {{ 'Click vào elemnt để edit' }}
                </div>
                <settingHeading v-show="isElement == 'Heading'" />
                <settingFeatured v-show="isElement == 'Featured'" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import draggable from 'vuedraggable';
import elementHeading from './components/heading/elementHeading.vue';
import settingHeading from './components/heading/settingHeading.vue';
import elementFeatured from './components/featured/elementFeatured.vue';
import settingFeatured from './components/featured/settingFeatured.vue';
export default {
    components: {
        draggable,
        elementHeading,
        settingHeading,
        settingFeatured,
        elementFeatured
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['getAllElement', 'isElement'])
    },
    mounted() {},
    methods: {
        ...mapActions([]),
        checkTitle(el, ev) {
            console.log('ev: ', ev, el);
            // ev.dataTransfer.setData('text', ev.target);
            this.$store.dispatch('checkElements', el);
        },
        onDragging(ev) {
            console.log(ev);
            ev.dataTransfer.setData('text', ev.target.id);
            //this.$store.commit('module/namespace', status);
        },
        allowDrop(ev) {
            ev.preventDefault();
        },
        drop(ev) {
            ev.preventDefault();
            // let data = ev.dataTransfer.getData('text');
            // console.log(data);
            // ev.target.appendChild(document.getElementById(data));
        }
    }
};
</script>
<style>
.elcss {
    width: 100%;
    height: 80px;
    padding: 10px;
    background-color: #fff;
}
</style>
