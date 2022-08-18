<template>
    <div v-if="getSelectEl">
    <!-- <button @click=check()>sdjf.gmf/g;,</button> -->
        <div class="flex justify-between tab-header text-center mb-3">
            <div
                class="w-full tab-item p-1 cursor-pointer"
                v-for="t in tabs"
                :key="t.id"
                @click="activeTab = t.id"
            >
                {{ t.label }}
            </div>
        </div>
        <div class="tab-content">
            <div v-if="activeTab == 'content'">
                <div class="mb-3">
                    <label for="content">{{ 'Layout' }}</label>
                    <select
                        class="block w-full border border-gray-500 rounded-md p-2"
                        v-model="getSelecteds.settings.position"
                    >
                        <option value="flex">Layout 1</option>
                        <option value="block">Layout 2</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="link">{{ 'Image' }}</label>
                    <div class="grid grid-cols-2 gap-2">
                        <div
                            v-for="(img, i) in images"
                            :key="i"
                            :class="
                                getSelecteds.settings.image === img ? 'border-4 border-red-400' : ''
                            "
                        >
                            <img :src="img" alt="" @click="getSelecteds.settings.image = img" />
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="tag">{{ 'Title' }}</label>
                    <input
                        v-model="getSelecteds.settings.title"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    />
                </div>

                <div class="mb-3">
                    <label for="tag">{{ 'Content' }}</label>
                    <textarea
                        v-model="getSelecteds.settings.content"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    >
                    </textarea>
                </div>

                <div class="mb-3">
                    <label for="tag">{{ 'Btn text' }}</label>
                    <input
                        v-model="getSelecteds.settings.btnText"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    />
                </div>

                <div class="mb-3">
                    <label for="tag">{{ 'Btn Link' }}</label>
                    <input
                        v-model="getSelecteds.settings.link"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    />
                </div>
            </div>
            <div v-else>
                <div class="mb-3">
                    <label for="align">{{ 'Alignment' }}</label>
                    <select
                        class="block w-full border border-gray-500 rounded-md p-2"
                        v-model="getSelecteds.styles.align"
                    >
                        <option v-for="align in getAlignments" :value="align.id" :key="align.id">
                            {{ align.label }}
                        </option>
                    </select>
                </div>

                <div class="mb-3 flex">
                    <color-picker
                        v-model:pureColor="getSelecteds.styles.background"
                        useType="pure"
                        disableHistory
                        shape="circle"
                        lang="en"
                    />
                    <label for="background">Background</label>
                </div>

                <div class="mb-3">
                    <label for="color">{{ 'Box Shadow' }}</label>
                    <br />
                    <select
                        v-model="getSelecteds.styles.boxShadow"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    >
                        <option value="shadow-sm">Small</option>
                        <option value="shadow-md">Medium</option>
                        <option value="shadow-lg">Large</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="border">Border</label>
                    <div class="flex gap-2 items-center w-100">
                        <select
                            style="width: 55px"
                            class="block border border-gray-500 rounded-md p-1"
                            v-model="getSelecteds.styles.border_width"
                        >
                            <option value="">None</option>
                            <option v-for="index in 5" :value="`${index}px`" :key="index">
                                {{ index }}px
                            </option>
                        </select>

                        <select
                            class="block border border-gray-500 rounded-md p-1 flex-grow"
                            v-model="getSelecteds.styles.border_style"
                        >
                            <option value="solid">Solid</option>
                            <option value="dashed">Dashed</option>
                            <option value="dotted">Dotted</option>
                        </select>

                        <color-picker
                            v-model:pureColor="getSelecteds.styles.border_color"
                            useType="pure"
                            disableHistory
                            shape="circle"
                            lang="en"
                        />

                        <select
                            style="width: 55px"
                            class="block border border-gray-500 rounded-md p-1"
                            v-model="getSelecteds.styles.border_radius"
                        >
                            <option value="0">None</option>
                            <option v-for="radius in borderRadius" :key="radius" :value="radius">
                                {{ radius }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            activeTab: 'content',
            // getSelecteds: {},
            tabs: [
                { id: 'content', label: 'Content' },
                { id: 'design', label: 'Design' }
            ],
            content: {},
            design: {},
            images: [
                'https://cdn.pixabay.com/photo/2017/09/23/04/02/dice-2777809_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_960_720.jpg',
                'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/03/27/20/57/people-1284253_960_720.jpg'
            ]
        };
    },
    mounted() {},
    methods: {
        check(){
             console.log('this.getSelecteds: ', this.getSelecteds);
        }
    },
    computed: {
        ...mapGetters([
            'getAllElement',
            'isElement',
            'getSelectEl',
            'getSelected',
            'getAlignments',
            'borderRadius',
            'positions'
        ]),
        getSelecteds() {
            return this.getSelectEl;
        },
       
    },
    watch: {}
};
</script>
