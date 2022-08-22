<template>
    <div v-if="getSelected">
        <button @click="check()">check data</button>

        <div class="flex justify-between text-center mb-3">
            <div
                class="w-full p-1 cursor-pointer"
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
            <div class="w-1/3 p-1 cursor-pointer">
                <DotsVerticalIcon class="h-5 w-5 inline-block float-right" />
            </div>
        </div>
        <div class="w-full p-1 cursor-pointer">
            <ChevronDownIcon class="h-5 w-5 inline-block" /> Title
        </div>

        <div>
            <div v-if="activeTab == 'content'" class="pl-3 bg-white ...">
                <div>
                    <label class="float-left ...">Name</label>
                    <input
                        type="text"
                        class="w-full rounded mb-2 ..."
                        v-model="getSelected.title"
                    />
                </div>
                <div class="flex justify-between ...">
                    <div>
                        <select
                            name="tag"
                            class="rounded appearance-none ..."
                            v-model="getSelected.title_tag"
                        >
                            <option v-for="(tag, i) in titleTag" :key="i" :value="tag.tag">
                                {{ tag.tag }}
                            </option>
                        </select>
                        <span class="inline-block text-center ..."> Title tag</span>
                    </div>
                    <span class="inline-block text-center bg-green-100 ...">
                        {{ getSelected.title_tag }}</span
                    >
                </div>
            </div>
            <div v-else>
                <div class="mb-3">
                    <div class="mb-2" @click="isAlignment = !isAlignment">
                        <PencilIcon
                            class="h-5 w-5 inline-block border border-gray-600 rounded mr-3"
                        />Alignment
                    </div>
                    <div v-show="isAlignment" class="transition-all">
                        <select
                            class="block w-full border border-gray-500 rounded-md p-2"
                            v-model="getSelected.styles.align"
                        >
                            <option
                                v-for="align in getAlignments"
                                :value="align.id"
                                :key="align.id"
                            >
                                {{ align.label }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mb-2">
                    <color-picker
                        v-model:pureColor="getSelected.styles.color"
                        useType="pure"
                        disableHistory
                        shape="circle"
                        lang="en"
                    />
                    <label for="color">Text color</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { alignments, titleTag } from '../../functionData/data';

import { PencilIcon, SunIcon, DotsVerticalIcon } from '@heroicons/vue/solid';
export default {
    components: {
        PencilIcon,
        SunIcon,
        DotsVerticalIcon
    },
    data() {
        return {
            getAlignments: alignments,
            titleTag: titleTag,
            activeTab: 'content',
            isAlignment: false
        };
    },
    computed: {
        ...mapGetters(['getSelected'])
    },
    methods: {
        check() {
            console.log(this.getSelected);
        }
    }
};
</script>

<style></style>
