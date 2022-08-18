<template>
    <div v-if="getSelectEl">
        <!-- <button @click="check()">fgfhgo;johkl</button> -->
        <component
            v-if="getSelectEl"
            :is="getSelectEl.settings?.tag"
            :style="getSelectEl.styles"
            class="border border-indigo-600 ml-5 mr-5 mt-5 text-left"
            :class="getSelectEl.class"
            >{{ getSelectEl.settings.content }}
        </component>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
        };
    },
    mounted() {},
    computed: {
        ...mapGetters(['getSelected','getSelectEl']),
    },
    methods:{
        check(){
            console.log("check",this.getSelectEl);
        }
    }
};
</script>
<style>
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: initial;
    font-weight: bold !important;
}
h1 {
    font-size: 2em !important;
}
h2 {
    font-size: 1.5em !important;
}
h3 {
    font-size: 1.17em !important;
}
h4 {
    font-size: 1em !important;
}
h5 {
    font-size: 0.83em !important;
}
h6 {
    font-size: 0.67em !important;
}
</style>
