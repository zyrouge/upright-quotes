<script setup lang="ts">
import { ref } from "vue";
import { API, IMeta, IQuote } from "./tools/api";
import { ExternalURLs } from "./tools/constants";

import FooterLink from "./components/FooterLink.vue";

const meta = ref<IMeta | null>(null);

const getMeta = async () => {
    meta.value = await API.getMeta();
};

const currentQuote = ref<{
    index: number;
    quote: IQuote;
    json: string;
    image: string;
} | null>(null);

const getQuote = async () => {
    if (!meta.value) {
        throw new Error("Metadata was not fetched");
    }

    const index = Math.floor(Math.random() * meta.value.size);
    const quote = await API.getQuoteJson(index);
    const json = API.getQuoteJsonURL(index);
    const image = API.getQuoteImageURL(index);

    currentQuote.value = {
        index,
        quote,
        json,
        image,
    };
};

(async () => {
    await getMeta();
    await getQuote();
})();
</script>

<template>
    <div
        class="px-10"
        v-if="currentQuote"
        :style="{
            color: currentQuote.quote.color.contrast,
            backgroundColor: currentQuote.quote.color.primary,
        }"
    >
        <div id="header" class="u-flex-center !justify-around">
            <p class="font-bold">UprightQuotes</p>

            <p>
                <a class="u-link" :href="ExternalURLs.github">GitHub</a>
            </p>
        </div>

        <div id="content" class="u-flex-center">
            <div class="max-w-[500px]">
                <p class="text-4xl md:text-6xl font-bold">
                    {{ currentQuote.quote.quote }}
                </p>
                <p class="mt-4 text-lg">~ {{ currentQuote.quote.author }}</p>
            </div>
        </div>

        <div id="footer" class="u-flex-center flex-wrap gap-2 pb-4">
            <FooterLink :color="currentQuote.quote.color" :onClick="getQuote">
                Refresh <b>Quote</b>
            </FooterLink>

            <FooterLink
                :color="currentQuote.quote.color"
                :to="currentQuote.json"
            >
                View as <b>JSON</b>
            </FooterLink>

            <FooterLink
                :color="currentQuote.quote.color"
                :to="currentQuote.image"
            >
                Save as <b>Image</b>
            </FooterLink>
        </div>
    </div>
</template>
