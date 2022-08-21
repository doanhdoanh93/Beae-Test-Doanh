<template>
    <div v-if="element">
        <!-- <button @click="check()"> check data </button> -->
        <component
            v-if="element"
            :is="setCss.tag"
            :style="setCss.styles"
            class="pl-5 pr-5 pt-2 pb-2 text-left mb-3"
        >
            <div v-if="!setCss.link">{{ setCss.content }}</div>
            <div v-else>
                <a :href="setCss.link" target="_blank">{{ setCss.content }} </a>
            </div>
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
    computed: {
        setCss() {
            const element = this.element;
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
            if (styles.align) {
                css.push(`text-align: ${styles.align}`);
            }
            if (styles.color) {
                css.push(`color: ${styles.color}`);
            }
            if (styles.typography) {
                if (styles.typography.font_size) {
                    css.push(`font-size: ${styles.typography.font_size}`);
                }
                if (styles.typography.font_weight) {
                    css.push(`font-weight: ${styles.typography.font_weight}`);
                }
                if (styles.typography.letter_spacing) {
                    css.push(`letter-spacing: ${styles.typography.letter_spacing}`);
                }
                if (styles.typography.line_height) {
                    css.push(`line-height: ${styles.typography.line_height}`);
                }
                if (styles.typography.text_decoration) {
                    css.push(`text-decoration: ${styles.typography.text_decoration}`);
                }
                if (styles.typography.text_transform) {
                    css.push(`text-transform: ${styles.typography.text_transform}`);
                }
            }
            // console.log('object', css);
            let font = css.join(';');
            return {
                tag: element.settings?.tag ? element.settings.tag : 'h1',
                link: element.settings?.link ? element.settings.link : null,
                content: element.settings?.content ? element.settings.content : element.desc,
                styles: font
            };
        }
    },
    methods: {
        check() {
            console.log('check', this.setCss, this.element);
        }
    }
};
</script>
