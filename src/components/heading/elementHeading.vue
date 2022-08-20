<template>
    <div v-if="element">
       <!-- <button @click="check()"> check data </button> -->
        <component
            v-if="element"
            :is="setCss.tag"
            :style="setCss.styles"
            class="ml-5 mr-5 text-left text-inherit"
            >{{ setCss.content }}
        </component>
    </div>
</template>

<script>
export default {
    props: {
        element: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {};
    },
    mounted() {},
    computed: {
        setCss() {
            const element=this.element
            const styles = this.element.styles;
            // console.log('fontStyle: ', styles);
            let css = [];
            if (styles) {
                switch (styles.frontStyle) {
                    case 'italic':
                        css.push('font-style: italic');
                        break;
                    case 'bold':
                        css.push('font-weight: bold');
                        break;
                    case 'line-through':
                        css.push('text-decoration: line-through');
                        break;
                    default:
                        css.push('font-style: normal');
                }
            }
            if (styles.align){css.push(`text-align: ${styles.align}`);}
            if (styles.color){css.push(`color: ${styles.color}`);}
            console.log('object',css);
            let font = css.join(';');
            return {
                tag: element.settings?.tag ? element.settings.tag : 'p',
                link:element.settings?.link ? element.settings.link : null,
                content: element.settings?.content ? element.settings.content : element.desc,
                styles: font
                }
        }
    },
    methods: {
        check() {
            console.log('check', this.setCss, this.element);
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
