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
                @click="exportJSON()"
            >
                Import/Export JSON
            </button>
        </div>

        <div class="flex-grow flex gap-3">
            <div id="left" ref="left" class="flex-shrink-0 w-1/6 pl-3">
                <div class="grid grid-cols-3 gap-3 mt-1">
                    <div v-for="(el, i) in elements" :key="i">
                        <div class="elcss p-3" draggable="true" @dragstart="checkTitle(el)">
                            <component :is="el.icon" :class="`w-8 h-8 mx-auto`"></component>
                            <div>
                                {{ el.label }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="main" class="flex-grow p-5 bg-white" @dragover="allowDrop" @drop="drop">
                <div class="h-full w-full flex pt-10 pl-10 pr-10" v-show="!isElement">
                    <div
                        class="border-dashed border-8 border-blue-300 text-center w-full h-60 flex items-center justify-center"
                    >
                        <p class="text-2xl">DRAG ELEMENT HERE</p>
                    </div>
                </div>
                <div v-if="builders.length > 0">
                    <div v-for="(element, id) in builders" :key="id">
                        <div :class="`buil-el ${element.id === getSelected.id ? 'active' : ''}`">
                            <div
                                class="buil-el-delete"
                                @click="deleteElement(element)"
                                title="delete"
                            >
                                x
                            </div>
                            <component
                                :is="element.component"
                                :element="element"
                                @click="openSetting(element)"
                            ></component>
                        </div>
                    </div>
                </div>
            </div>

            <div id="right" class="flex-shrink-0 w-1/6 p-2 bg-white text-left" ref="right">
                <div v-show="!isElement" class="pt-20 text-center">Click vào elemnt để edit</div>
                <div v-if="getSelected">
                    <component :is="getSelected.component_setting"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import elements from './functionData/elements';
import {
    AcademicCapIcon,
    BadgeCheckIcon,
    AnnotationIcon,
    ViewBoardsIcon,
    ViewGridAddIcon
} from '@heroicons/vue/outline';
import draggable from 'vuedraggable';
import elementHeading from './components/heading/elementHeading.vue';
import settingHeading from './components/heading/settingHeading.vue';
import elementFeatured from './components/featured/elementFeatured.vue';
import settingFeatured from './components/featured/settingFeatured.vue';
import elementTestimonial from './components/testimonial/elementTestimonial.vue';
import settingTestimonial from './components/testimonial/settingTestimonial.vue';
import settingCardTestimonial from './components/testimonial/settingCardTestimonial.vue';
export default {
    components: {
        AcademicCapIcon,
        BadgeCheckIcon,
        AnnotationIcon,
        ViewBoardsIcon,
        ViewGridAddIcon,
        draggable,
        elementHeading,
        settingHeading,
        settingFeatured,
        elementFeatured,
        elementTestimonial,
        settingTestimonial,
        settingCardTestimonial
    },
    data() {
        return {
            elements: elements,
            draging: false,
            datadrag: null
        };
    },
    computed: {
        ...mapGetters(['getAllElement', 'isElement', 'getSelected', 'builders'])
    },
    mounted() {},
    methods: {
        ...mapActions(['add']),
        checkTitle(el, ev) {
            this.datadrag = JSON.parse(JSON.stringify(el))
        },
        allowDrop(ev) {
            ev.preventDefault();
        },
        drop(ev) {
             this.$store.dispatch('checkElements',  this.datadrag);
             this.$store.dispatch('add',  this.datadrag);
            ev.preventDefault();
        },
        openSetting(el) {
            this.$store.dispatch('openSetting', el);
        },
        deleteElement(el) {
            let choice = confirm('Are you sure delete?');
            if (choice) {
                this.$store.dispatch('deleteEL', el);
            }
        },
        exportJSON() {
            console.log('this.builders: ', this.builders);
        }
    }
};
</script>
<style lang="css" src="./assets/styles/common.css"></style>
