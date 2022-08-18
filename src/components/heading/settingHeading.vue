<template>
    <div v-if="getSelectEl">
        <!-- <button @click="check()">dshkflgf</button> -->
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
        <select name="" id="" class="float-left rounded w-full border-none mb-2 ...">
            <option value="title">Title</option>
        </select>
        <div class="tab-content">
            <div v-if="activeTab == 'content'" class="pl-3 bg-white ...">
                <div>
                    <label for="" class="float-left ..."> Heading text</label>
                    <textarea
                        name=""
                        id=""
                        v-model="selectOpt.settings.content"
                        class="w-full caret-blue-500 mb-2 rounded ..."
                    ></textarea>
                </div>
                <div class="mb-3">
                    <label for="font_style" class="float-left ...">{{ 'Font style' }}</label>
                    <select
                        class="block w-full border border-gray-500 rounded-md p-2"
                        v-model="selectOpt.styles.frontStyle"
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
                        v-model="selectOpt.settings.link"
                    />
                </div>
                <div class="flex justify-between ...">
                    <div>
                        <select name="tag" class="rounded ..." v-model="selectOpt.settings.tag">
                            <!-- <option></option> -->
                            <option v-for="(tag, i) in titleTag" :key="i" :value="tag.tag">
                                {{ tag.tag }}
                            </option>
                        </select>
                        <span class="inline-block text-center ..."> Title tag</span>
                    </div>
                    <span class="inline-block text-center bg-green-100 ...">
                        {{ selectOpt.settings.tag }}</span
                    >
                </div>
            </div>
            <div v-else>
              
                    <div class="mb-3">
                        <label for="align">{{ 'Alignment' }}</label>
                        <select
                            class="block w-full border border-gray-500 rounded-md p-2"
                            v-model="selectOpt.class"
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

                    <div class="mb-2">
                        <ion-icon name="pencil-outline"></ion-icon> Typography
                        <ion-icon name="tv-outline"></ion-icon>
                    </div>

                    <div class="mb-2">
                        <color-picker
                            v-model:pureColor="selectOpt.styles.color"
                            useType="pure"
                            disableHistory
                            shape="circle"
                            lang="en"
                        />
                        <label for="color">{{ 'Text color' }}</label>
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
            isContent: true,
            isDesign: false,
            // selectOpt: {},
            activeTab: 'content',
            tabs: [
                { id: 'content', label: 'Content' },
                { id: 'design', label: 'Design' }
            ],
            titleTag: [
                { tag: 'H1' },
                { tag: 'H2' },
                { tag: 'H3' },
                { tag: 'H4' },
                { tag: 'H5' },
                { tag: 'H6' },
                { tag: 'Strong' },
                { tag: 'Span' }
            ]
        };
    },
    watch: {},
    computed: {
        ...mapGetters(['getSelected', 'getElHeading', 'getSelectEl','getAlignments']),
        selectOpt() {
            return this.getSelectEl;
        }
    },
    methods: {
        check() {
            console.log(this.selectOpt);
        }
    }
};
</script>

<style></style>
