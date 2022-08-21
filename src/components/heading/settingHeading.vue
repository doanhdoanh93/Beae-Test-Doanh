<template>
    <div v-if="getSelected">
        <!-- <button @click="check()"> check data </button> -->

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
                    <label for="" class="float-left ..."> Heading text</label>
                    <textarea
                        name=""
                        id=""
                        v-model="getSelected.settings.content"
                        class="w-full caret-blue-500 mb-2 rounded select-all ..."
                    ></textarea>
                </div>
                <div class="mb-3">
                    <div class="w-full p-1 cursor-pointer">
                        <TranslateIcon class="h-5 w-5 inline-block" /> Font style
                    </div>
                    <select
                        class="block w-full border border-gray-500 rounded-md p-2"
                        v-model="getSelected.styles.frontStyle"
                    >
                        <option value="normal">Normal</option>
                        <option value="italic">Italic</option>
                        <option value="bold">Bold</option>
                        <option value="line-through">Line through</option>
                    </select>
                </div>
                <div>
                    <p class="float-left ...">Link</p>
                    <input
                        type="text"
                        placeholder="https://internal.beae.com/setup"
                        class="w-full rounded mb-2 ..."
                        v-model="getSelected.settings.link"
                    />
                </div>
                <div class="flex justify-between ...">
                    <!-- <div class="w-full p-1 cursor-pointer">
                        <PencilIcon  class="h-5 w-5 inline-block" /> 
                    </div> -->
                    <div>
                        <select
                            name="tag"
                            class="rounded appearance-none ..."
                            v-model="getSelected.settings.tag"
                        >
                            <!-- appearance-none class not working ??? -->
                            <option v-for="(tag, i) in titleTag" :key="i" :value="tag.tag">
                                {{ tag.tag }}
                            </option>
                        </select>
                        <span class="inline-block text-center ..."> Title tag</span>
                    </div>
                    <span class="inline-block text-center bg-green-100 ...">
                        {{ getSelected.settings.tag }}</span
                    >
                </div>
                <div>
                    <ckeditor />
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

                <div class="mb-2" @click="isTypography = !isTypography">
                    <PencilIcon
                        class="h-5 w-5 inline-block border border-gray-600 rounded mr-3"
                    />Typography
                </div>
                <div v-show="isTypography" class="transition-all">
                    <div class="mb-2">
                        <label for="fontSize">Font-Size</label>
                        <select
                            class="block w-full border border-gray-500 rounded-md p-2"
                            v-model="getSelected.styles.typography.font_size"
                        >
                            <option v-for="(size, i) in fontSize" :value="size" :key="i">
                                {{ size }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="fontWeight">Font-Weight</label>
                        <select
                            class="block w-full border border-gray-500 rounded-md p-2"
                            v-model="getSelected.styles.typography.font_weight"
                        >
                            <option v-for="(weight, i) in fontWeight" :value="weight" :key="i">
                                {{ weight }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="letterSpacing">Letter Spacing</label>
                        <select
                            class="block w-full border border-gray-500 rounded-md p-2"
                            v-model="getSelected.styles.typography.letter_spacing"
                        >
                            <option v-for="(style, i) in letterSpacing" :value="style" :key="i">
                                {{ style }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="lineHeight">Line Weight</label>
                        <select
                            class="block w-full border border-gray-500 rounded-md p-2"
                            v-model="getSelected.styles.typography.line_height"
                        >
                            <option v-for="(style, i) in lineHeight" :value="style" :key="i">
                                {{ style }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="text_decoration">Text Decration Line</label>
                        <select
                            class="block w-full border border-gray-500 rounded-md p-2"
                            v-model="getSelected.styles.typography.text_decoration"
                        >
                            <option v-for="(style, i) in textDecoration" :value="style" :key="i">
                                {{ style }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="text_transform">Text Transform</label>
                        <select
                            class="block w-full border border-gray-500 rounded-md p-2"
                            v-model="getSelected.styles.typography.text_transform"
                        >
                            <option v-for="(style, i) in textTransform" :value="style" :key="i">
                                {{ style }}
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
import {
    alignments,
    titleTag,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textDecoration,
    textTransform
} from '../../functionData/data';

import {
    PencilIcon,
    SunIcon,
    DotsVerticalIcon,
    ChevronDownIcon,
    TranslateIcon,
    ChevronRightIcon
} from '@heroicons/vue/solid';
export default {
    components: {
        PencilIcon,
        SunIcon,
        DotsVerticalIcon,
        ChevronDownIcon,
        TranslateIcon,
        ChevronRightIcon
    },
    data() {
        return {
            getAlignments: alignments,
            titleTag: titleTag,
            isContent: true,
            isDesign: false,
            activeTab: 'content',
            isAlignment: false,
            isTypography: false,
            fontSize: fontSize,
            fontWeight: fontWeight,
            letterSpacing: letterSpacing,
            lineHeight: lineHeight,
            textDecoration: textDecoration,
            textTransform: textTransform
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
