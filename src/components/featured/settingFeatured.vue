<template>
    <div v-if="getSelected">
        <!-- <button @click=check()>sdjf.gmf/g;,</button> -->
        <div class="flex justify-between text-center mb-3">
            <div
                class="w-full tab-item p-1 cursor-pointer"
                @click="activeTab = 'content'"
                :class="activeTab == 'content' ? 'bg-indigo-200 hover:bg-indigo-500' : ''"
            >
                <PencilIcon class="h-5 w-5 inline-block" /> Content
            </div>
            <div
                class="w-full p-1 cursor-pointer"
                @click="activeTab = 'design'"
                :class="activeTab == 'design' ? 'bg-indigo-200 hover:bg-indigo-500' : ''"
            >
                <SunIcon class="h-5 w-5 inline-block" /> Design
            </div>
        </div>
        <div>
            <div v-if="activeTab == 'content'">
                <div class="mb-3">
                    <label for="content">{{ 'Layout' }}</label>
                    <select
                        class="block w-full border border-gray-500 rounded-md p-2"
                        v-model="getSelected.settings.position"
                    >
                        <option value="flex">Layout 1</option>
                        <option value="block">Layout 2</option>
                    </select>
                </div>

                <div class="mb-3">
                    <div class="w-full p-1 cursor-pointer">
                        <PhotographIcon class="h-5 w-5 inline-block" /> Images
                    </div>
                    <!-- <label for="link">{{ 'Image' }}</label> -->
                    <div class="grid grid-cols-2 gap-2">
                        <div
                            v-for="(img, i) in images"
                            :key="i"
                            :class="
                                getSelected.settings.image === img ? 'border-4 border-red-400' : ''
                            "
                        >
                            <img :src="img" alt="" @click="getSelected.settings.image = img" />
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="tag">{{ 'Title' }}</label>
                    <input
                        v-model="getSelected.settings.title"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    />
                </div>

                <div class="mb-3">
                    <label for="tag">{{ 'Content' }}</label>
                    <textarea
                        v-model="getSelected.settings.content"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    >
                    </textarea>
                </div>

                <div class="mb-3">
                    <label for="tag">{{ 'Btn text' }}</label>
                    <input
                        v-model="getSelected.settings.btnText"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    />
                </div>

                <div class="mb-3">
                    <label for="tag">{{ 'Btn Link' }}</label>
                    <input
                        v-model="getSelected.settings.link"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    />
                </div>
            </div>
            <div v-else>
                <div class="mb-3">
                    <label for="align">{{ 'Alignment' }}</label>
                    <select
                        class="block w-full border border-gray-500 rounded-md p-2"
                        v-model="getSelected.styles.align"
                    >
                        <option v-for="align in getAlignments" :value="align.id" :key="align.id">
                            {{ align.label }}
                        </option>
                    </select>
                </div>

                <div class="mb-3 flex">
                    <color-picker
                        v-model:pureColor="getSelected.styles.background"
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
                        v-model="getSelected.styles.boxShadow"
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
                            v-model="getSelected.styles.border_width"
                        >
                            <option value="">None</option>
                            <option v-for="index in 5" :value="`${index}px`" :key="index">
                                {{ index }}px
                            </option>
                        </select>

                        <select
                            class="block border border-gray-500 rounded-md p-1 flex-grow"
                            v-model="getSelected.styles.border_style"
                        >
                            <option value="solid">Solid</option>
                            <option value="dashed">Dashed</option>
                            <option value="dotted">Dotted</option>
                        </select>

                        <color-picker
                            v-model:pureColor="getSelected.styles.border_color"
                            useType="pure"
                            disableHistory
                            shape="circle"
                            lang="en"
                        />

                        <select
                            style="width: 55px"
                            class="block border border-gray-500 rounded-md p-1"
                            v-model="getSelected.styles.border_radius"
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
import { alignments, borderRadius, positions, images } from '../../functionData/data';
import { PencilIcon, SunIcon, PhotographIcon } from '@heroicons/vue/solid';
export default {
    components: { PencilIcon, SunIcon, PhotographIcon },
    data() {
        return {
            getAlignments: alignments,
            positions: positions,
            borderRadius: borderRadius,
            activeTab: 'content',
            content: {},
            design: {},
            images: images
        };
    },
    methods: {
        check() {
            console.log('this.getSelected: ', this.getSelected);
        }
    },
    computed: {
        ...mapGetters(['getSelected'])
    }
};
</script>
