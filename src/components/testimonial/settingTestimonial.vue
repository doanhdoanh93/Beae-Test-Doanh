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

        <div>
            <div v-if="activeTab == 'content'">
                <div class="w-full p-1 cursor-pointer mb-5">
                    <ChevronDownIcon class="h-5 w-5 inline-block" /> Testimonial
                </div>
                <div class="w-full p-1 cursor-pointer">Testimonials Items</div>
                <!-- <draggable tag="ul" :list="getSelected.items" class="list-group" handle=".handle" item-key="name"> -->
                    <div v-for="(element, i) in getSelected.items" :key="i">
                        <div class="border p-2 rounded-md shadow-sm mb-2">
                            <div class="flex list-user">
                                <div class="font-bold flex-grow" @click="toggleCollapse(element)">
                                    <ChevronRightIcon class="h-5 w-5 inline-block" />
                                    {{ element.title }}
                                </div>
                                <div class="flex list-user-actions">
                                    <DuplicateIcon
                                        title="Clones"
                                        class="w-6 h-6 p-1 text-gray-400 hover:text-gray-600"
                                        @click="clonesItem(element)"
                                    />
                                    <TrashIcon
                                        title="Delete"
                                        class="w-6 h-6 p-1 text-gray-400 hover:text-gray-600"
                                        @click="deleteItem(element)"
                                    />
                                    <MenuAlt4Icon
                                        title="transitions"
                                        class="handle w-6 h-6 p-1 text-gray-400 hover:text-gray-600"
                                        draggable="true"
                                    />
                                </div>
                            </div>
                            <div v-show="element.id === collapse" class="transition-all">
                                <div class="mb-2">
                                    <label for="avatar" class="text-sm">Avatar</label>
                                    <div class="grid grid-cols-4 gap-2">
                                        <div
                                            v-for="(img, i) in avatars"
                                            :key="i"
                                            :class="
                                                element.avatar === img
                                                    ? 'border-4 border-red-400'
                                                    : ''
                                            "
                                        >
                                            <img :src="img" alt="" @click="element.avatar = img" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <label for="title" class="text-sm">Name</label>
                                    <input
                                        type="text"
                                        class="block w-full border border-gray-500 rounded-md p-2"
                                        v-model="element.title"
                                    />
                                </div>

                                <div class="mb-2">
                                    <label for="position" class="text-sm">Position</label>
                                    <input
                                        type="text"
                                        class="block w-full border border-gray-500 rounded-md p-2"
                                        v-model="element.position"
                                    />
                                </div>
                                <div class="mb-2">
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
                                <div class="mb-2">
                                    <label for="content" class="text-sm">Text</label>
                                    <textarea
                                        type="text"
                                        class="block w-full border border-gray-500 rounded-md p-2"
                                        rows="5"
                                        v-model="element.content"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </draggable> -->
                
                <div class="text-blue-500 font-bold cursor-pointer" @click="addItem">
                    + Add item
                </div>
            </div>
            <div v-else>
                <div class="w-full p-1 cursor-pointer mb-5">
                    <ChevronDownIcon class="h-5 w-5 inline-block" /> Title
                </div>
                <div class="mb-3 flex items-center">
                    <color-picker
                        v-model:pureColor="getSelected.styles.color"
                        useType="pure"
                        disableHistory
                        shape="circle"
                        lang="en"
                    />
                    <label for="background" class="ml-2"> Text Color</label>
                </div>

                <div class="mb-3">
                    <label for="align">Alignment</label>
                    <select
                        class="block w-full border border-gray-500 rounded-md p-2"
                        v-model="getSelected.styles.align"
                    >
                        <option v-for="align in alignments" :value="align.id" :key="align.id">
                            {{ align.label }}
                        </option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="boxShadow" class="ml-2">Text shadow</label>
                    <select
                        v-model="getSelected.styles.boxShadow"
                        class="block w-full border border-gray-500 rounded-md p-2"
                    >
                        <option value="">None</option>
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
import draggable from 'vuedraggable';
// import { VueDraggableNext } from 'vue-draggable-next'
import { mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { avatars, alignments, borderRadius } from '../../functionData/data';
import {
    PencilIcon,
    SunIcon,
    DotsVerticalIcon,
    ChevronDownIcon,
    TranslateIcon,
    ChevronRightIcon,
    DuplicateIcon,
    TrashIcon,
    MenuAlt4Icon
} from '@heroicons/vue/solid';
export default {
    components: {
        draggable,
        PencilIcon,
        SunIcon,
        DotsVerticalIcon,
        ChevronDownIcon,
        TranslateIcon,
        ChevronRightIcon,
        DuplicateIcon,
        TrashIcon,
        MenuAlt4Icon
    },
    data() {
        return {
            borderRadius: borderRadius,
            alignments: alignments,
            avatars: avatars,
            isContent: true,
            isDesign: false,
            activeTab: 'content',
            collapse: null
        };
    },
    watch: {},
    computed: {
        ...mapGetters(['getSelected'])
    },
    methods: {
        check() {
            console.log(this.getSelected);
        },
        toggleCollapse(item) {
            if (this.collapse && this.collapse === item.id) {
                this.collapse = null;
                return;
            }
            this.collapse = item.id;
        },
        deleteItem(item) {
            this.getSelected.items = this.getSelected.items.filter((el) => el !== item);
        },
        addItem() {
            console.log('this.getSelected: ', this.getSelected);
            const newID = uuidv4();
            this.getSelected.items.push({
                id: newID,
                component_setting: 'SimpleTextSetting',
                avatar: null,
                title: 'Name ' + newID,
                position: 'Position ' + newID,
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            });
        },
        clonesItem(item) {
            const newItem = {
                ...item,
                id: uuidv4()
            };
            let items = this.getSelected.items;
            let pos = items.findIndex((el) => el === item);
            items = [...items.slice(0, pos), newItem, ...items.slice(pos)];
            // console.log('items: ', pos,items);
            this.getSelected.items = items;
        }
    }
};
</script>

<style></style>
