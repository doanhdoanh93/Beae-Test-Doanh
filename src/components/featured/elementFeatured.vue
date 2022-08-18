<template>
    <div v-if="getSelectEl" :style="cssBorder">
        <!-- <button @click="check()">sdjffgklg</button> -->
        <div
            class="overflow-hidden"
            :class="element.settings.position"
            :style="`border:${element.styles.border}; background-color: ${element.styles.background} `"
        >
            <div class="right w-full">
                <img
                    v-if="element.settings.image"
                    :src="element.settings.image"
                    alt=""
                    :style="`width: 100%; min-height: 300px; background-color: ${element.styles.background}`"
                />
                <!-- <div
                    v-else
                    :style="`width: 100%; max-height: 100px; background-color: ${element.styles.background}`"
                ></div> -->
            </div>
            <div class="left ml-3" :class="element.styles.align">
                <div class="font-bold">
                    {{ element.settings.title }}
                </div>
                <div>
                    {{ element.settings.content }}
                </div>
                <a
                    :href="element.settings.link"
                    target="_blank"
                    v-if="element.settings.link"
                    class="bg-purple-500 hover:bg-purple-600 btn"
                >
                    {{ element.settings.btnText }}
                </a>
                <button class="bg-green-500 hover:bg-green-700" v-else>
                    {{ element.settings.btnText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {};
    },
    mounted() {},
    computed: {
        ...mapGetters(['getSelectEl']),
        element() {
            return this.getSelectEl;
        },
        cssBorder() {
            const styles = this.element?.styles;

            const styleBorder = [];
            if (styles.border_width) {
                styleBorder.push(`border: ${styles.border_width} solid`);
                styles.border_style && styleBorder.push(`border-style: ${styles.border_style}`);
                styles.border_color && styleBorder.push(`border-color: ${styles.border_color}`);
            }
            styles.border_radius && styleBorder.push(`border-radius: ${styles.border_radius}`);
            let css = styleBorder.join(';');
            return css;
        }
    },
    methods: {
        check() {
            console.log('css: ', this.css);
        }
    }
};
</script>
