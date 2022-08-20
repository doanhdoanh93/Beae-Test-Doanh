<template>
    <div class="elementTestimonial" v-if="element">
     <!-- <button @click="check()"> check data </button>  -->
        <div class="grid grid-cols-3 gap-8" :style="setCss.aligmentsss">
            <div v-for="(item, i) in items" :key="i" :style="setCss.cssBorder">
                <component :is="element.styles.content_tag || 'div'" class="mb-3" :style="setCss.styles">
                    {{ item.content }}
                </component>

                <div class="flex" >
                    <div class="flex-shrink-0">
                        <div class="rounded-full h-14 w-14 border overflow-hidden">
                            <img v-if="item.avatar" :src="item.avatar" :alt="item.title" />
                            <div v-else class="w-full h-full bg-purple-400"></div>
                        </div>
                    </div>
                    <div class="flex-grow ml-3 text-left">
                        <component :is="element.styles.title_tag || 'div'" :style="setCss.colorTitle">
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
    mounted() {},

    computed: {
        ...mapGetters(['getSelected']),
        items() {
            return this.element.items;
        },
         setCss() {
            const element=this.element
            const styles = this.element.styles;
            // console.log('fontStyle: ', styles);
           
            let css = []; 
            let cssTitle=[]
            let cssAvatar=[]
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
            if (styles.align){cssAvatar.push(`text-align: ${styles.align}`);}
            if (styles.color){cssTitle.push(`color: ${styles.color}`);}
            // console.log('object',css);
             const styleBorder = [];
            if (styles.border_width) {
                styleBorder.push(`border: ${styles.border_width} solid`);
                styles.border_style && styleBorder.push(`border-style: ${styles.border_style}`);
                styles.border_color && styleBorder.push(`border-color: ${styles.border_color}`);
            }
            styles.border_radius && styleBorder.push(`border-radius: ${styles.border_radius}`);
            let cssBorder = styleBorder.join(';');
            let font = css.join(';');
              let fontTitle = cssTitle.join(';');
              let aligmentsss=cssAvatar.join(';');
            return {
                tag: element.settings?.tag ? element.settings.tag : 'p',
                link:element.settings?.link ? element.settings.link : null,
                content: element.settings?.content ? element.settings.content : element.desc,
                styles: font,
                colorTitle: fontTitle,
                aligmentsss: aligmentsss,
                cssBorder:cssBorder
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
