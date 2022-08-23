<template>
    <div class="elementTestimonial pl-5 p-5 pt-2 pb-2 mb-3" v-if="element">
        <!-- <button @click="check()">check data</button> -->
        <div class="grid grid-cols-3 gap-8" :style="setCss.font">
            <div v-for="(item, i) in items" :key="i" :style="setCss.cssBorder">
                <component
                    :is="item.content_tag || 'div'"
                    class="mb-3"
                    :style="setCssItem(item,'content')"
                    :class="`${
                        getSelected && getSelected.id == item.id && item.target == 'content'
                            ? 'active'
                            : ''
                    }`"
                    @click.stop="setCard(item, 'content')"
                >
                    {{ item.content }}
                </component>

                <div class="flex">
                    <div class="flex-shrink-0">
                        <div class="rounded-full h-14 w-14 border overflow-hidden">
                            <img v-if="item.avatar" :src="item.avatar" :alt="item.title" />
                            <div v-else class="w-full h-full bg-purple-400"></div>
                        </div>
                    </div>
                    <div class="flex-grow ml-3 text-left">
                        <component
                            :is="item.title_tag || 'div'"
                            :style="setCssItem(item,'title')"
                            :class="`${
                                getSelected && getSelected.id == item.id && item.target == 'title'
                                    ? 'active'
                                    : ''
                            }`"
                            @click.stop="setCard(item, 'title')"
                        >
                            {{ item.title }}
                        </component>
                        <div>{{ item.position }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    computed: {
        ...mapGetters(['getSelected', 'collapse']),
        items() {
            return this.element.items;
        },
        setCss() {
            const element = this.element;
            const styles = this.element.styles;
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
            const styleBorder = [];
            if (styles.border_width) {
                styleBorder.push(`border: ${styles.border_width} solid`);
                styles.border_style && styleBorder.push(`border-style: ${styles.border_style}`);
                styles.border_color && styleBorder.push(`border-color: ${styles.border_color}`);
            }
            styles.border_radius && styleBorder.push(`border-radius: ${styles.border_radius}`);
            let cssBorder = styleBorder.join(';');
            let font = css.join(';');

            return {
                tag: element.settings?.tag ? element.settings.tag : 'p',
                link: element.settings?.link ? element.settings.link : null,
                content: element.settings?.content ? element.settings.content : element.desc,
                font: font,
                cssBorder: cssBorder,
            };
        }
    },
    methods: {
        check() {
            console.log('check', this.items);
        },
        toggleCollapse(item) {
            this.$store.dispatch('setCollapse', item);
        },
        setCard(item, tag) {
            item.target = tag;
            console.log('item: ', item);
            this.$store.dispatch('openSetting', item);
        },
        setCssItem(item,tag) {
            const styles = item.styles;
            let css = [];
            if (styles[tag+'_align'] ) {
                css.push(`text-align: ${styles[tag+'_align']}`);
            }
            if (styles[tag+'_color']) {
                css.push(`color: ${styles[tag+'_color']}`);
            }
            return css.join(';');
        },
    }
};
</script>
<style scoped>
.active {
    border: 1px dashed;
    border-color: red;
}
</style>
