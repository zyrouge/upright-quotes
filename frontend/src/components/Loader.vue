<script setup lang="ts">
import { Locale } from "../tools/locale";
</script>

<template>
    <div class="u-flex-center w-full min-h-screen">
        <div class="u-flex-center flex-col">
            <div>{{ Locale.UprightQuotes }}</div>

            <div class="mt-1 u-flex-center gap-0.5" id="loader-container">
                <div id="loader-child"></div>
                <div id="loader-child"></div>
                <div id="loader-child"></div>
            </div>
        </div>
    </div>
</template>
