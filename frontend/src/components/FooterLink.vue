<script setup lang="ts">
import { IColorScheme } from "../tools/api";

defineProps<{
    color: IColorScheme;
    to?: string;
    onClick?: () => void;
}>();
</script>

<template>
    <div
        class="rounded px-3"
        :style="{
            color: color.primary,
            backgroundColor: color.contrast,
        }"
    >
        <button class="u-link" @click="onClick" v-if="onClick">
            <slot></slot>
        </button>

        <a class="u-link" :href="to" target="_blank" v-if="to">
            <slot></slot>
        </a>
    </div>
</template>
